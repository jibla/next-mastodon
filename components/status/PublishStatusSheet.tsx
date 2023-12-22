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
          <SheetTitle>What's on your mind?</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <PublishStatusBlock />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
