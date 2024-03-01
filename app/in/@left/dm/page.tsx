"use client";

import ConversationsListItem from "@/components/dm/ConversationsListItem";
import useDmList from "@/lib/hooks/useDmList";

export default function DirectMessagesLeft() {
  const { loading, dmList } = useDmList();

  return (
    <>
      <div className="flex flex-col gap-2 p-4 pt-0">
        <h2 className="text-center font-bold">Direct Messages</h2>

        {loading && <div className="animate-pulse">Loading...</div>}

        {!loading &&
          dmList.map(
            (
              {
                id,
                name,
                lastMessage,
                lastMessageDate,
                isRead,
                avatar,
                lastMessageId,
              },
              index,
            ) => (
              <ConversationsListItem
                id={id}
                name={name}
                lastMessage={lastMessage}
                lastMessageDate={lastMessageDate}
                lastMessageId={lastMessageId}
                isRead={isRead}
                avatarUrl={avatar}
                key={index}
              />
            ),
          )}
      </div>
    </>
  );
}
