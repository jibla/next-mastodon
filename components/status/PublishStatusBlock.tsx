import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import usePublishStatus from "@/lib/hooks/usePublishStatus";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import StatusComponent from "../feed/StatusComponent";

export default function PublishStatusBlock() {
  const { data: session, status } = useSession();
  const { publishCallback, loading, result } = usePublishStatus();
  const [statusText, setStatusText] = useState("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setStatusText(event.target.value);
  };
  return (
    <>
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
    </>
  );
}
