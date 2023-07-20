"use client";

import { SessionProvider } from "next-auth/react";
import { AuthenticatedBlock } from "../auth/AuthenticatedBlock";

export default function Header() {
  return (
    <>
      <SessionProvider>
        <AuthenticatedBlock />
      </SessionProvider>
    </>
  );
}
