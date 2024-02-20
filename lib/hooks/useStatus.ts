import { useEffect, useState } from "react";
import { container } from "../shared/ioc";
import { Status } from "../data/core/entities/Status";
import { FetchStatusUseCase } from "../data/core/use-cases/fetch-status/FetchStatusUseCase";
import { Feed } from "../data/core/entities/Feed";
import { FetchStatusThreadUseCase } from "../data/core/use-cases/fetch-status-thread/FetchStatusThreadUseCase";

interface StatusThreadCallback {
  (): Promise<Feed>;
}

export default function useStatus(id: string): {
  status: Status | null;
  loading: boolean;
  getThread: StatusThreadCallback;
} {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);

  const [threadCallback, setThreadCallback] = useState<StatusThreadCallback>(
    () => {
      return async () => {
        return { statuses: [] };
      };
    },
  );

  useEffect(() => {
    async function fetchStatus(id: string) {
      try {
        const status = await container
          .get<FetchStatusUseCase>("fetch-status")
          .execute({
            id,
          });
        setStatus(status.status);
        if (status.status.commentsCount > 0) {
          console.log("Setting thread callback");
          setThreadCallback(() => {
            return async () => {
              const thread = await container
                .get<FetchStatusThreadUseCase>("fetch-status-thread")
                .execute({ id });
              return thread;
            };
          });
        }
      } catch (error) {
        console.error("An error occurred while fetching the status:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStatus(id);
  }, [id]);

  return { status, loading, getThread: threadCallback };
}
