"use client";

import { Input } from "@/components/shadcnui/input";
import { CircleIcon, GlobeIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SignedInBlock } from "../auth/SignedInBlock";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/shadcnui/navigation-menu";
import { Menubar } from "@/components/shadcnui/menubar";

export function Menu() {
  const [appVersion, setAppVersion] = useState<string | undefined>();
  const pathname = usePathname();

  useEffect(() => {
    setAppVersion(process.env.APP_VERSION);
  }, []);

  return (
    <NavigationMenu className="flex justify-between items-center rounded-none border-b border-none px-2 lg:px-4 my-2">
      <NavigationMenuList>
        <NavigationMenuItem className="flex mr-1">
          <Link href="/in" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/in"}
            >
              <HomeIcon className="mr-1" />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <Link href="/in/local" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/in/local"}
            >
              <CircleIcon className="mr-1" />
              Local
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/in/federated" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              active={pathname === "/in/federated"}
            >
              <GlobeIcon className="mr-1" />
              Federated
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <div className="mx-4 my-2">
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
        />
      </div>

      <NavigationMenuList className="flex">
        <NavigationMenuItem className="font-bold mr-1">
          {process.env.NEXT_PUBLIC_APP_VERSION}
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <Link
            href="https://github.com/Omedia/next-mastodon"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              View Code
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Menubar>
          <SignedInBlock />
        </Menubar>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
