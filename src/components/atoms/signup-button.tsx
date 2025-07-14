"use client";
import Link from "next/link";

export default function SignUpButton() {
  return (
    <Link href="/login" passHref>
      <button className="w-40 h-9 bg-blue-500 text-white font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer">
        Iniciar Sesión
      </button>
    </Link>
  );
}
