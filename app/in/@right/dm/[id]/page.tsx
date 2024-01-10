"use client";

export default function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="flex justify-center">Conversation # {params.id}</div>
    </>
  );
}
