import { Feed } from "@/lib/data/core/entities/Feed";
import { Status } from "@/lib/data/core/entities/Status";
import FeedPort, {
  getFeedOutput,
  getFeedParams,
} from "@/lib/data/core/ports/FeedPort";
import { injectable } from "inversify";
import { generateFeedMockData } from "./data-generator";

@injectable()
export class FeedsPortInMemoryAdapter implements FeedPort {
  getFeed(params: getFeedParams): Promise<getFeedOutput> {
    const mockData = generateFeedMockData();

    const statuses: Status[] = mockData.map((status) => {
      return {
        id: status.id,
        name: status.name,
        avatar: status.avatar,
        authorUrl: status.authorUrl,
        text: status.text,
        createdAt: status.createdAt,
      };
    });

    const feed = {
      statuses,
    };

    const output = new Promise<getFeedOutput>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          feed,
          next: () => {
            return this.getFeed(params);
          },
        });
      }, 1000);
    });

    return output;
  }
}
