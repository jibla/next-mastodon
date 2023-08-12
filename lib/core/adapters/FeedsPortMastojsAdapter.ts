import { Feed } from "../models/Feed";
import { Status } from "../models/Status";
import IFeedPort from "../ports/IFeedPort";
import BaseMastojsAdapter from "./BaseMastojsAdapter";

export default class FeedsPortMastojsAdapter
  extends BaseMastojsAdapter
  implements IFeedPort
{
  async getFeed(type: string = "home"): Promise<Feed> {
    if (this.client) {
      let mastojsMethod: keyof typeof this.client.v1.timelines;

      switch (type) {
        case "home":
          mastojsMethod = "home";
          break;
        case "public":
          mastojsMethod = "public";
          break;
        default:
          mastojsMethod = "home";
          break;
      }

      const result = await this.client.v1.timelines[mastojsMethod].list({
        limit: 30,
      });

      const feedStatuses: Status[] = result.map((status) => {
        const singleStatus: Status = {
          name: status.account.displayName,
          avatar: status.account.avatar,
          authorUrl: status.account.url,
          createdAt: status.createdAt,
          text: status.content,
        };

        return singleStatus;
      });

      const feed: Feed = {
        statuses: feedStatuses,
      };

      return feed;
    } else {
      throw new Error(
        "Mastojs client couldn't be created. Probably the active server is not set.",
      );
    }
  }
}
