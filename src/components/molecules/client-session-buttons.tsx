"use client";
import { User } from "@supabase/supabase-js";
import SignOutButton from "../atoms/signout-button";
import SignInButton from "../atoms/signin-button";

export default function ClientSessionButtons({
  session,
}: {
  readonly session: User | null;
}) {
  return (
    <>
      {session ? (
        <SignOutButton />
      ) : (
        <div className="flex items-center space-x-3">
          <div className="h-9 flex justify-center text-bank3 items-center hover:text-bank2 cursor-pointer">
            <a href="/signup" className="text-sm font-normal hover:font-bold">
              Registrarse
            </a>
          </div>
          <SignInButton />
        </div>
      )}
    </>
  );
}
