/**
 * Respaldo en la nube (Supabase) — opcional, no bloqueante.
 * La app funciona 100% offline sin esto. Si el usuario inicia sesión
 * con su correo (link mágico, sin contraseña), el progreso se sube y
 * se descarga automáticamente para poder recuperarlo en otro dispositivo.
 *
 * Proyecto dedicado a esta app (org "Solo Leveling Recetario" en Supabase),
 * separado de cualquier otro proyecto de la cuenta.
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://iwcrxhefstuumfrxzduk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_boT17LrFyITn3fP82faI6w_RCR0zGSa';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let storeRef = null;
let subiendoTimeout = null;

/**
 * Conecta el store con Supabase: al iniciar, si hay sesión, descarga y
 * fusiona el progreso más reciente; luego sube cada cambio (con debounce).
 */
export async function iniciar(store) {
  storeRef = store;

  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    await descargarYFusionar();
  }

  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      descargarYFusionar();
    }
  });

  store.onChange(() => {
    clearTimeout(subiendoTimeout);
    subiendoTimeout = setTimeout(subirProgreso, 2000);
  });
}

async function descargarYFusionar() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session || !storeRef) return;

  const { data, error } = await supabase
    .from('progreso')
    .select('data, updated_at')
    .eq('user_id', session.user.id)
    .maybeSingle();

  if (error) {
    console.warn('[cloudSync] Error al descargar:', error);
    return;
  }

  if (data) {
    const localActualizado = storeRef.data.actualizado_en ? new Date(storeRef.data.actualizado_en) : new Date(0);
    const nubeActualizada = new Date(data.updated_at);

    if (nubeActualizada > localActualizado) {
      storeRef.data = data.data;
      await storeRef.save();
      console.log('☁️ Progreso restaurado desde la nube');
    } else {
      await subirProgreso();
    }
  } else {
    await subirProgreso();
  }
}

export async function subirProgreso() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session || !storeRef) return;

  storeRef.data.actualizado_en = new Date().toISOString();

  const { error } = await supabase
    .from('progreso')
    .upsert({
      user_id: session.user.id,
      data: storeRef.data,
      updated_at: storeRef.data.actualizado_en
    });

  if (error) console.warn('[cloudSync] Error al subir:', error);
}

/**
 * Envía un link mágico (sin contraseña) al correo indicado.
 */
export async function enviarLinkMagico(email) {
  const redirectTo = window.location.origin + window.location.pathname;
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo }
  });
  return { ok: !error, error };
}

export async function cerrarSesion() {
  await supabase.auth.signOut();
}

export async function obtenerUsuario() {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user ?? null;
}
