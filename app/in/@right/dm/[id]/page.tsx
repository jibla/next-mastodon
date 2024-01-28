"use client";

import DmMessage from "@/components/direct-messages/DmMessage";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Status } from "@/lib/data/core/entities/Status";
import useConversatrion from "@/lib/hooks/useConversation";
import useReplyToStatus from "@/lib/hooks/useReplyToStatus";
import { Separator } from "@radix-ui/react-menubar";
import { Key, useState } from "react";

export default function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const { loading, conversation } = useConversatrion(params.id);

  const { replyCallback, loading: replyLoading, result } = useReplyToStatus();
  const [replyMessageText, setReplyMessageText] = useState("");

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setReplyMessageText(event.target.value);
  };
  return (
    <ScrollArea
      className="h-screen"
      style={{ maxHeight: "calc(100vh - 5.5rem)" }}
    >
      <div className="flex flex-1 flex-col">
        <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
          {!loading &&
            conversation.map(
              (status: Status, index: Key | null | undefined) => (
                <DmMessage
                  key={index}
                  status={status}
                  align={Number(index) % 2 === 0 ? "left" : "right"}
                />
              ),
            )}
        </div>
        <Separator className="mt-auto" />
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
                  replyCallback(
                    conversation[conversation.length - 1].id,
                    replyMessageText,
                  );
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
      </div>
    </ScrollArea>
  );
}
