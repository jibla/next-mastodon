import { Status } from "@/lib/core/models/Status";
import { Feed } from "../../../models/Feed";
import IFeedPort from "../../../ports/IFeedPort";
import { generateFeedMockData } from "./data-generator";

export class FeedsPortInMemoryAdapter implements IFeedPort {
  getFeed(type: string = "public"): Promise<Feed> {
    const mockData = generateFeedMockData();

    const statuses: Status[] = mockData.map((status) => {
      return {
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
