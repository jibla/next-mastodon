import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pencil } from "lucide-react";
import PublishStatusBlock from "./PublishStatusBlock";
import Timeline from "../feed/Timeline";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";
import { ScrollArea } from "../ui/scroll-area";

export default function PublishStatusSheet() {
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
          <SheetTitle>{"What's on your mind?"}</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <PublishStatusBlock />
          <ScrollArea
            className="h-screen mt-16"
            style={{ maxHeight: "calc(100vh - 5.5rem)" }}
          >
            <div className="pr-4">
              <Timeline type={feedTypes.home} />
            </div>
          </ScrollArea>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
