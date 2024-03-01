"use client";

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/shadcnui/menubar";
import { signOut, useSession } from "next-auth/react";
import Soon from "../shared/soon";

export function SignedInBlock() {
  const { data: session, status } = useSession();

  return (
    <>
      {session && (
        <MenubarMenu>
          <MenubarTrigger className="font-bold">
            Signed in as @{session.user?.name}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Edit Profile <Soon />
            </MenubarItem>
            <MenubarItem>
              Notifications <Soon />
            </MenubarItem>
            <MenubarItem>
              Preferences <Soon />
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => signOut()}>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      )}
    </>
  );
}
