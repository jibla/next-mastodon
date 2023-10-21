import { Button } from "@/components/ui/button";
import {
  BookmarkFilledIcon,
  EnvelopeOpenIcon,
  ListBulletIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <>
      <div className="lg:block space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Personal Space
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <StarFilledIcon className="mr-1" />
              Favourites
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BookmarkFilledIcon className="mr-1" />
              Bookmarks
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ListBulletIcon className="mr-1" />
              Lists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <EnvelopeOpenIcon className="mr-1" />
              Direct Messages
            </Button>
          </div>
        </div>

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Trending
          </h2>
          <div className="space-y-1"></div>
        </div>
      </div>
    </>
  );
}
