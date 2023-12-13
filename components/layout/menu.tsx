"use client";

import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  CircleIcon,
  FrameIcon,
  GlobeIcon,
  HomeIcon,
  Link2Icon,
  ListBulletIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { AuthenticatedMenuItem } from "../auth/AuthenticatedMenuItem";

export function Menu() {
  return (
    <Menubar className="flex justify-between rounded-none border-b border-none px-2 lg:px-4 my-2">
      <div className="flex">
        <Link href="/in">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <HomeIcon className="mr-1" />
              Home
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href="/in/local">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <CircleIcon className="mr-1" />
              Local
            </MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href="/in/federated">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <GlobeIcon className="mr-1" />
              Federated
            </MenubarTrigger>
          </MenubarMenu>
        </Link>
      </div>

      <div className="mx-4 my-2">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
        />
      </div>

      <div className="flex">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">v0.0.65</MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>About</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>
              <Link href="https://github.com/Omedia/next-mastodon">
                View Code
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <SessionProvider>
          <AuthenticatedMenuItem />
        </SessionProvider>
      </div>
    </Menubar>
  );
}
