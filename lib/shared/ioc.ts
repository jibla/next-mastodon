import { Container } from "inversify";
import "reflect-metadata";
import { FeedsPortInMemoryAdapter } from "../data/adapters/feed/in-memory/FeedsPortInMemoryAdapter";
import FeedsPortMastojsAdapter from "../data/adapters/feed/mastojs/FeedsPortMastojsAdapter";
import FeedPort from "../data/core/ports/FeedPort";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { UseCase } from "./use-cases/UseCaseInterface";

const container = new Container();
const env = process.env.NODE_ENV || "development";

// use cases
container.bind<UseCase>("fetch-feed").to(FetchFeedsUseCase);

// adapters
if (env === "test") {
  container.bind<FeedPort>("feeds-port").to(FeedsPortInMemoryAdapter);
} else {
  container.bind<FeedPort>("feeds-port").to(FeedsPortMastojsAdapter);
}

export { container };
