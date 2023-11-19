"use client";

import Status from "@/components/feed/status";
import useStatus from "@/lib/hooks/useStatus";

export default function StatusPage({ params }: { params: { id: string } }) {
  const { status, loading } = useStatus(params.id);

  return (
    <div className="flex justify-center">
      {!loading && status != undefined && (
        <Status
          id={status.id}
          name={status.name}
          avatar={status.avatar}
          authorUrl={status.authorUrl}
          createdAt={status.createdAt}
          text={status.text}
          sharesCount={status.sharesCount}
          commentsCount={status.commentsCount}
          likesCount={status.likesCount}
        />
      )}
    </div>
  );
}
