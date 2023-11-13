import useFeed from "@/lib/hooks/useFeed";
import { TimelineProps } from "@/lib/types/TimelineProps";
import Status from "./newStatus";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";
import { Button } from "../ui/button";

export default function Timeline({ type }: TimelineProps) {
  const { feed, loading, error, fetchNextPage } = useFeed(feedTypes.public);

  return (
    <div className="flex justify-items-center ">
      {error && <p>{error}</p>}

      {(!loading || feed.statuses.length > 0) && (
        <div role="feed" className="mx-auto">
          {feed.statuses.map((status, index) => (
            <Status
              key={index}
              id={status.id}
              name={status.name}
              avatar={status.avatar}
              authorUrl={status.authorUrl}
              createdAt={status.createdAt}
              text={status.text}
            />
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
