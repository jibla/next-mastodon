import { Button } from "@/components/ui/button";
import {
  ActivityLogIcon,
  BookmarkFilledIcon,
  EnvelopeOpenIcon,
  FrameIcon,
  Link2Icon,
  ListBulletIcon,
  PersonIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <>
      <div className="hidden lg:block space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Explore
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="mr-1" />
              Posts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FrameIcon className="mr-1" />
              Hashtags
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <PersonIcon className="mr-1" />
              People
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link2Icon className="mr-1" />
              News
            </Button>
          </div>
        </div>

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
