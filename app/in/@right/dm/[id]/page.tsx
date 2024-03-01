"use client";

import ReplyToStatus from "@/components/status/ReplyToStatus";
import { ScrollArea } from "@/components/shadcnui/scroll-area";
import { Status } from "@/lib/data/core/entities/Status";
import useConversatrion from "@/lib/hooks/useConversation";
import { Separator } from "@radix-ui/react-menubar";
import { Key } from "react";
import DmMessage from "@/components/dm/DmMessage";

export default function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const { loading, conversation } = useConversatrion(params.id);

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
        {!loading && (
          <ReplyToStatus id={conversation[conversation.length - 1].id} />
        )}
      </div>
    </ScrollArea>
  );
}
