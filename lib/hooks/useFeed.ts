import { useEffect, useState } from "react";
import { Feed } from "../data/core/entities/Feed";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { container } from "../shared/ioc";

export default function useFeed(type: string): {
  feed: Feed;
  loading: boolean;
} {
  const [feed, setFeed] = useState<Feed>({ statuses: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimeline() {
      try {
        const timelineData = await container
          .get<FetchFeedsUseCase>("fetch-feed")
          .execute({
            type,
          });
        setFeed(timelineData.feed);
      } catch (error) {
        console.error("An error occurred while fetching the feed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTimeline();
  }, [type]);

  return { feed, loading };
}
