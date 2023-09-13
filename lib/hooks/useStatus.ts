import { useEffect, useState } from "react";
import { container } from "../shared/ioc";
import { Status } from "../data/core/entities/Status";
import { FetchStatusUseCase } from "../data/core/use-cases/fetch-status/FetchStatusUseCase";

export default function useStatus(id: string): {
  status: Status | null;
  loading: boolean;
} {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus(id: string) {
      try {
        const status = await container
          .get<FetchStatusUseCase>("fetch-status")
          .execute({
            id,
          });
        setStatus(status.status);
      } catch (error) {
        console.error("An error occurred while fetching the status:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStatus(id);
  }, [id]);

  return { status, loading };
}
