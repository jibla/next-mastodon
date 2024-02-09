"use client";

import Soon from "@/components/shared/soon";
import PublishStatusSheet from "@/components/status/PublishStatusSheet";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  EnvelopeOpenIcon,
  ListBulletIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="lg:block space-y-4 py-4">
        <div className="flex justify-center mt-3">
          <PublishStatusSheet />
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
            Personal Space
          </h2>
          <NavigationMenu>
            <NavigationMenuList className="flex-col items-start">
              <NavigationMenuItem className="w-full mb-1">
                <Link href="/in/favourites" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} w-full justify-start`}
                    active={pathname === "/in/favourites"}
                  >
                    <StarFilledIcon className="mr-1" />
                    Favourites
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full mb-1">
                <Link href="/in/bookmarks" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} w-full justify-start`}
                    active={pathname === "/in/bookmarks"}
                  >
                    <BookmarkFilledIcon className="mr-1" />
                    Bookmarks
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex w-full justify-start mb-1">
                <Button variant="ghost" className="w-full justify-start">
                  <ListBulletIcon className="mr-1" />
                  Lists
                  <Soon />
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full">
                <Link href="/in/dm" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} w-full justify-start`}
                    active={pathname === "/in/dm"}
                  >
                    <EnvelopeOpenIcon className="mr-1" />
                    Direct Messages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
