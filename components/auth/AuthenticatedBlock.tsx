"use client";

import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";

export function AuthenticatedBlock() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && (
        <div className="absolute w-full flex justify-center items-center p-3 shadow-lg">
          <p className="text-gray-200 text-sm mx-3 rounded-lg bg-gray-700 px-2 py-1">
            Signed in as {session.user?.name}
          </p>
          <SignOutButton />
        </div>
      )}
    </>
  );
}
