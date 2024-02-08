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
import Link from "next/link";

export default function Navbar() {
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
          <div className="space-y-1">
            <Link href="/in/favourites">
              <Button variant="ghost" className="w-full justify-start">
                <StarFilledIcon className="mr-1" />
                Favourites
              </Button>
            </Link>
            <Link href="/in/bookmarks">
              <Button variant="ghost" className="w-full justify-start">
                <BookmarkFilledIcon className="mr-1" />
                Bookmarks
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <ListBulletIcon className="mr-1" />
              Lists
              <Soon />
            </Button>
            <Link href="/in/dm">
              <Button variant="ghost" className="w-full justify-start">
                <EnvelopeOpenIcon className="mr-1" />
                Direct Messages
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
