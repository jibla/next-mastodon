import { feedTypes } from "@/lib/data/core/ports/FeedPort";
import useFeed from "@/lib/hooks/useFeed";
import { useRouter } from "next/navigation";
import { Button } from "../shadcnui/button";
import Status from "../status/Status";

export interface TimelineProps {
  type: feedTypes;
  startFrom?: string;
  userId?: string;
}

export default function Timeline({ type, startFrom, userId }: TimelineProps) {
  const { feed, loading, error, fetchNextPage } = useFeed(
    type,
    startFrom,
    userId,
  );
  const router = useRouter();

  return (
    <div className="flex justify-items-center ">
      {error && <p>{error}</p>}

      {(!loading || feed.statuses.length > 0) && (
        <div role="feed" className="mx-auto">
          {feed.statuses.map((status, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => router.push(`/in/status/${status.id}`)}
            >
              <Status status={status} />
            </div>
          ))}

          <div className="flex justify-center">
            <Button onClick={fetchNextPage} disabled={loading}>
              Load More
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
