"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { SessionProvider } from "next-auth/react";
import { AuthenticatedMenuItem } from "../auth/AuthenticatedMenuItem";
import {
  ListBulletIcon,
  HomeIcon,
  FrameIcon,
  PersonIcon,
  Link2Icon,
  GlobeIcon,
  CircleIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export function Menu() {
  return (
    <Menubar className="flex justify-between rounded-none border-b border-none px-2 lg:px-4 my-2">
      <div className="flex">
        <MenubarMenu>
          <MenubarTrigger>
            <HomeIcon className="mr-1" />
            Home
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <FrameIcon className="mr-1" />
            Explore
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>
              <ListBulletIcon className="mr-1" />
              Posts
            </MenubarItem>
            <MenubarItem inset>
              <FrameIcon className="mr-1" />
              Hashtags
            </MenubarItem>
            <MenubarItem inset>
              <PersonIcon className="mr-1" />
              People
            </MenubarItem>
            <MenubarItem inset>
              <Link2Icon className="mr-1" />
              News
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <CircleIcon className="mr-1" />
            Local
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>
              <ListBulletIcon className="mr-1" />
              Posts
            </MenubarItem>
            <MenubarItem inset>
              <FrameIcon className="mr-1" />
              Hashtags
            </MenubarItem>
            <MenubarItem inset>
              <PersonIcon className="mr-1" />
              People
            </MenubarItem>
            <MenubarItem inset>
              <Link2Icon className="mr-1" />
              News
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <GlobeIcon className="mr-1" /> Federated
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>
              <ListBulletIcon className="mr-1" />
              Posts
            </MenubarItem>
            <MenubarItem inset>
              <FrameIcon className="mr-1" />
              Hashtags
            </MenubarItem>
            <MenubarItem inset>
              <PersonIcon className="mr-1" />
              People
            </MenubarItem>
            <MenubarItem inset>
              <Link2Icon className="mr-1" />
              News
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
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
          <MenubarTrigger className="font-bold">v0.0.1</MenubarTrigger>
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