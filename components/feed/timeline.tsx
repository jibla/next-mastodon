import useFeed from "@/lib/hooks/useFeed";
import { TimelineProps } from "@/lib/types/TimelineProps";
import Status from "./status";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Timeline({ type, startFrom }: TimelineProps) {
  const { feed, loading, error, fetchNextPage } = useFeed(type, startFrom);

  return (
    <div className="flex justify-items-center ">
      {error && <p>{error}</p>}

      {(!loading || feed.statuses.length > 0) && (
        <div role="feed" className="mx-auto">
          {feed.statuses.map((status, index) => (
            <Link key={index} href={`/in/status/${status.id}`}>
              <Status
                id={status.id}
                name={status.name}
                avatar={status.avatar}
                authorUrl={status.authorUrl}
                createdAt={status.createdAt}
                text={status.text}
              />
            </Link>
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
