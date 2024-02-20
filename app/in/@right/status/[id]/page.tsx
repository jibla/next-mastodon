"use client";

import StatusComponent from "@/components/feed/StatusComponent";
import { Feed } from "@/lib/data/core/entities/Feed";
import useStatus from "@/lib/hooks/useStatus";
import { useEffect, useState } from "react";

export default function StatusPage({ params }: { params: { id: string } }) {
  const { status, loading, getThread } = useStatus(params.id);
  const [statusThread, setStatusThread] = useState<Feed>({ statuses: [] });

  useEffect(() => {
    const fetchThread = async () => {
      if (getThread) {
        const thread = await getThread();
        setStatusThread(thread);
      }
    };

    fetchThread();
  }, [getThread]);

  return (
    <div className="flex flex-col justify-center">
      {!loading && status != undefined && (
        <div className="">
          <StatusComponent status={status} />
        </div>
      )}
      {!loading && statusThread.statuses.length > 0 && (
        <div className="flex justify-end">
          <div className="w-[80%]">
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Thread:
            </h2>
            <div>
              {statusThread.statuses.map((threadStatus, index) => (
                <StatusComponent key={index} status={threadStatus} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
