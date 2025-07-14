"use client";
import { createSupabaseBrowserClient } from "../utils/supabase-browser";

export default function SignOutButton() {
  const supabase = createSupabaseBrowserClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Error al cerrar sesión, por favor inténtalo de nuevo");
    } else {
      window.location.href = "/"; // Redirect to home after sign out
    }
  };
  return (
    <button
      onClick={handleSignOut}
      className="w-40 h-9 bg-red-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      Cerrar Sesión
    </button>
  );
}
