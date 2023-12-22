import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import usePublishStatus from "@/lib/hooks/usePublishStatus";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import StatusComponent from "../feed/StatusComponent";

export default function PublishStatusSheet() {
  const { data: session, status } = useSession();
  const { publishCallback, loading, result } = usePublishStatus();
  const [statusText, setStatusText] = useState("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setStatusText(event.target.value);
  };

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

            <Textarea
              role="textbox"
              placeholder="Type your post here."
              onChange={handleTextareaChange}
            />
            <Button
              onClick={() => {
                publishCallback(statusText);
              }}
            >
              Publish
            </Button>
          </div>

          <div>
            {loading && <span>Loading...</span>}
            {result?.status && <StatusComponent status={result.status} />}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
