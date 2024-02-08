import { Input } from "@/components/ui/input";
import { CircleIcon, GlobeIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthenticatedMenuItem } from "../auth/AuthenticatedMenuItem";
import { useRouter } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
} from "@/components/ui/menubar";

export function Menu() {
  const [appVersion, setAppVersion] = useState<string | undefined>();
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  useEffect(() => {
    setAppVersion(process.env.APP_VERSION);
  }, []);

  return (
    <NavigationMenu className="flex justify-between items-center rounded-none border-b border-none px-2 lg:px-4 my-2">
      <NavigationMenuList>
        <NavigationMenuItem className="flex">
          <Link href="/in" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive("/in")}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/in/local" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive("/in/local")}>
              Local
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/in/federated" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive("/in/federated")}>
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
        <NavigationMenuItem className="font-bold">
          {process.env.NEXT_PUBLIC_APP_VERSION}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://github.com/Omedia/next-mastodon" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              View Code
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Menubar>
          <AuthenticatedMenuItem />
        </Menubar>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
