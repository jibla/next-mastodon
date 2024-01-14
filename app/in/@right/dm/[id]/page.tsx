"use client";

import DmMessage from "@/components/direct-messages/DmMessage";
import { Status } from "@/lib/data/core/entities/Status";
import useConversatrion from "@/lib/hooks/useConversation";
import { Key } from "react";

export default function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const { loading, conversation } = useConversatrion(params.id);

  return (
    <>
      {!loading &&
        conversation.map((status: Status, index: Key | null | undefined) => (
          <DmMessage key={index} status={status} />
        ))}
    </>
  );
}
