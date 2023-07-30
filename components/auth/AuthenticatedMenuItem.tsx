"use client";

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { signOut, useSession } from "next-auth/react";

export function AuthenticatedMenuItem() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && (
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            Signed in as @{session.user?.name}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Edit Profile</MenubarItem>
            <MenubarItem>Notifications</MenubarItem>
            <MenubarItem>Preferences</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => signOut()}>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </>
  );
}
