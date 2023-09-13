import { Feed } from "@/lib/data/core/entities/Feed";
import { Status } from "@/lib/data/core/entities/Status";
import FeedPort from "@/lib/data/core/ports/FeedPort";
import { injectable } from "inversify";
import { generateFeedMockData } from "./data-generator";

@injectable()
export class FeedsPortInMemoryAdapter implements FeedPort {
  getFeed(type: string = "public"): Promise<Feed> {
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

    const feed = new Promise<Feed>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          statuses: statuses,
        });
      }, 1000);
    });

    return feed;
  }
}
