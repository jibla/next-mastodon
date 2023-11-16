import FeedPort, {
  feedTypes,
  getFeedOutput,
  getFeedParams,
} from "@/lib/data/core/ports/FeedPort";
import { injectable } from "inversify";
import { MastojsClientFactory, fetchFeedPage } from "../../shared/mastojs";

@injectable()
export default class FeedsPortMastojsAdapter implements FeedPort {
  async getFeed(input: getFeedParams): Promise<getFeedOutput> {
    const client = await MastojsClientFactory.getClient();

    let mastoJsRepo = client.v1.timelines.public;
    let mastoJsListConf = {
      local: false,
      limit: input.limit,
      maxId: input.startFrom
        ? (parseInt(input.startFrom) - 1).toString()
        : undefined,
    };
    switch (input.type) {
      case feedTypes.home:
        mastoJsRepo = client.v1.timelines.home;
        break;
      case feedTypes.public:
        mastoJsRepo = client.v1.timelines.public;
        mastoJsListConf.local = false;
        break;
      case feedTypes.local:
        mastoJsRepo = client.v1.timelines.public;
        mastoJsListConf.local = true;
        break;
      default:
        mastoJsRepo = client.v1.timelines.public;
    }

    const paginator = mastoJsRepo.list(mastoJsListConf);

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
