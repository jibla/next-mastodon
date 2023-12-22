"use client";

import StatusComponent from "@/components/feed/StatusComponent";
import useStatus from "@/lib/hooks/useStatus";

export default function StatusPage({ params }: { params: { id: string } }) {
  const { status, loading } = useStatus(params.id);

  return (
    <div className="flex justify-center">
      {!loading && status != undefined && <StatusComponent status={status} />}
    </div>
  );
}
