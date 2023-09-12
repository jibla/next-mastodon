import { Feed } from "@/lib/data/core/entities/Feed";
import { Status } from "@/lib/data/core/entities/Status";
import FeedPort from "@/lib/data/core/ports/FeedPort";
import { injectable } from "inversify";
import BaseMastojsAdapter from "../../BaseMastojsAdapter";

@injectable()
export default class FeedsPortMastojsAdapter
  extends BaseMastojsAdapter
  implements FeedPort
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

      console.log("feed", feed);

      return feed;
    } else {
      throw new Error(
        "Mastojs client couldn't be created. Probably the active server is not set.",
      );
    }
  }
}
