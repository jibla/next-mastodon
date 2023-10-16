import { Feed } from "@/lib/data/core/entities/Feed";
import { Status } from "@/lib/data/core/entities/Status";
import FeedPort, {
  getFeedOutput,
  getFeedParams,
} from "@/lib/data/core/ports/FeedPort";
import { injectable } from "inversify";
import BaseMastojsAdapter from "../../BaseMastojsAdapter";
import { fetchFeedPage } from "../../shared/mastojs";

@injectable()
export default class FeedsPortMastojsAdapter
  extends BaseMastojsAdapter
  implements FeedPort
{
  async getFeed(input: getFeedParams): Promise<getFeedOutput> {
    const paginator = this.getClient().v1.timelines[input.type].list({
      limit: input.limit,
    });

    const feed = await fetchFeedPage(paginator);
    const nextFunc = async (): Promise<getFeedOutput> => {
      const nextPageFeed = await fetchFeedPage(paginator);

      return {
        feed: nextPageFeed,
        next: nextFunc,
      };
    };

    return {
      feed: feed,
      next: nextFunc,
    };
  }
}
