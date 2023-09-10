import { useState, useEffect } from "react";
import { Feed } from "../models/Feed";
import { UIAdaptersFactory } from "..";

export default function useFeed(type: string): {
  feed: Feed;
  loading: boolean;
} {
  const [feed, setFeed] = useState<Feed>({ statuses: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimeline() {
      try {
        const timelineData = await UIAdaptersFactory.FeedsPort().getFeed(type);
        setFeed(timelineData);
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
