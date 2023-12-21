import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function PublishStatus() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>What's on your mind?</SheetTitle>
          <SheetDescription>
            <div className="grid w-full gap-2">
              <Textarea placeholder="Type your post here." />
              <Button>Publish</Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
