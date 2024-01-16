"use client";

import DmMessage from "@/components/direct-messages/DmMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Status } from "@/lib/data/core/entities/Status";
import useConversatrion from "@/lib/hooks/useConversation";
import { SendIcon } from "lucide-react";
import { Key } from "react";

export default function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const { loading, conversation } = useConversatrion(params.id);

  return (
    <>
      <div className="relative">
        <ScrollArea
          className="h-screen"
          style={{ maxHeight: "calc(100vh - 5.5rem)" }}
        >
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
        </ScrollArea>

        <div className="absolute bottom-12 w-full">
          <form className="flex items-center space-x-2 flex-1">
            <Input className="flex-1" placeholder="Type a message..." />
            <Button type="submit">
              <SendIcon className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
