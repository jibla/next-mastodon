import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { Feed } from "../../entities/Feed";
import type FeedPort from "../../ports/FeedPort";

interface fetchFeedInput {
  type: string;
}

interface fetchFeedOutput {
  feed: Feed;
}

@injectable()
export class FetchFeedsUseCase implements UseCase {
  private feedPort: FeedPort;
  constructor(@inject("feeds-port") feedPort: FeedPort) {
    this.feedPort = feedPort;
  }

  async execute(input: fetchFeedInput): Promise<fetchFeedOutput> {
    const feed = await this.feedPort.getFeed(input.type);
    return { feed };
  }
}
