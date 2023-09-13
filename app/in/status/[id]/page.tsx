"use client";

import SingleStatus from "@/components/status/singleStatus";
import useStatus from "@/lib/hooks/useStatus";

export default function StatusPage({ params }: { params: { id: string } }) {
  const { status, loading } = useStatus(params.id);

  return (
    <div className="flex h-screen justify-center">
      {!loading && status != undefined && (
        <SingleStatus
          id={status.id}
          name={status.name}
          avatar={status.avatar}
          authorUrl={status.authorUrl}
          createdAt={status.createdAt}
          text={status.text}
        />
      )}
    </div>
  );
}
