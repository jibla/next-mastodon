import useFeed from "@/lib/hooks/useFeed";
import { TimelineProps } from "@/lib/types/TimelineProps";
import Status from "./newStatus";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";

export default function Timeline({ type }: TimelineProps) {
  const { feed, loading } = useFeed(feedTypes.public);

  return (
    <div>
      {!loading && (
        <div role="feed">
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
        </div>
      )}
    </div>
  );
}
