import useFeed from "@/lib/hooks/useFeed";
import { TimelineProps } from "@/lib/types/TimelineProps";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import StatusComponent from "./status";

export default function Timeline({ type, startFrom }: TimelineProps) {
  const { feed, loading, error, fetchNextPage } = useFeed(type, startFrom);
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
              <StatusComponent status={status} />
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
