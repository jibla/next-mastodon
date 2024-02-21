import useReplyToStatus from "@/lib/hooks/useReplyToStatus";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

interface ReplyToStatusProps {
  id: string;
}

export default function ReplyToStatus({ id }: ReplyToStatusProps) {
  const { replyCallback, loading: replyLoading, result } = useReplyToStatus();
  const [replyMessageText, setReplyMessageText] = useState("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setReplyMessageText(event.target.value);
  };
  return (
    <>
      <div className="p-4 pb-8">
        <div className="grid gap-4">
          <Textarea
            onChange={handleTextareaChange}
            className="p-4"
            placeholder={`Reply...`}
          />
          <div className="flex items-center">
            <Label
              htmlFor="mute"
              className="flex items-center gap-2 text-xs font-normal"
            ></Label>
            <Button
              disabled={replyLoading}
              onClick={() => {
                replyCallback(id, replyMessageText);
              }}
              size="sm"
              className="ml-auto"
            >
              {!replyLoading && "Send"}
              {replyLoading && "..."}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
