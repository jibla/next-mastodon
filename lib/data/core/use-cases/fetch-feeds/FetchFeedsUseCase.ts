import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import type FeedPort from "../../ports/FeedPort";
import { getFeedOutput, getFeedParams } from "../../ports/FeedPort";

@injectable()
export class FetchFeedsUseCase implements UseCase {
  private feedPort: FeedPort;
  constructor(@inject("feed-port") feedPort: FeedPort) {
    this.feedPort = feedPort;
  }

  async execute(input: getFeedParams): Promise<getFeedOutput> {
    return await this.feedPort.getFeed({
      type: input.type,
      limit: input.limit,
      startFrom: input.startFrom,
    });
  }
}
