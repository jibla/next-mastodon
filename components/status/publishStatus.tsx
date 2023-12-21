import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function PublishStatus() {
  const { data: session, status } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full mx-2">
          <Pencil className="mr-1 h-4 w-4" />
          Post
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>What's on your mind?</SheetTitle>
          <SheetDescription>
            <div className="grid w-full gap-2">
              {session && (
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage
                      src={session.user?.image || ""}
                      alt={session.user?.name || ""}
                    />
                    <AvatarFallback>NM</AvatarFallback>
                  </Avatar>
                  <span>@{session.user?.name}</span>
                </div>
              )}

              <Textarea placeholder="Type your post here." />
              <Button>Publish</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
