import { useCallback, useEffect, useState } from "react";
import { Feed } from "../data/core/entities/Feed";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { container } from "../shared/ioc";
import { feedTypes, getFeedOutput } from "../data/core/ports/FeedPort";

interface useFeedReturnType {
  feed: Feed;
  loading: boolean;
  error: string | null;
  fetchNextPage: () => Promise<void>;
}

export default function useFeed(
  type: feedTypes,
  startFrom?: string,
): useFeedReturnType {
  const [entireFeed, setEntireFeed] = useState<Feed>({ statuses: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<
    null | (() => Promise<getFeedOutput>)
  >(null);

  const fetchFeed = useCallback(
    async (fetchFunction: () => Promise<getFeedOutput>) => {
      setLoading(true);
      setError(null);
      try {
        const { feed, next } = await fetchFunction();

        setEntireFeed((prevFeed) => ({
          statuses: [...prevFeed.statuses, ...feed.statuses],
        }));

        setNextPage(() => next);
      } catch (error) {
        console.log(error);
        setError(`An error occurred while fetching the feed: ${error}`);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    async function fetchInitial() {
      const initialData = async () => {
        return await container.get<FetchFeedsUseCase>("fetch-feed").execute({
          type,
          limit: 10,
          startFrom: startFrom ?? undefined,
        });
      };

      fetchFeed(initialData);
    }

    fetchInitial();
  }, [type, fetchFeed, startFrom]);

  const fetchNextPage = useCallback(async () => {
    if (nextPage) {
      await fetchFeed(nextPage);
    } else {
      console.error("Next page function is not available.");
    }
  }, [nextPage, fetchFeed]);

  return { feed: entireFeed, loading, error, fetchNextPage };
}
