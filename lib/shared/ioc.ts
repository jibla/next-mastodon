import { Container } from "inversify";
import "reflect-metadata";
import { FeedsPortInMemoryAdapter } from "../data/adapters/feed/in-memory/FeedsPortInMemoryAdapter";
import FeedsPortMastojsAdapter from "../data/adapters/feed/mastojs/FeedsPortMastojsAdapter";
import FeedPort from "../data/core/ports/FeedPort";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { UseCase } from "./use-cases/UseCaseInterface";
import { FetchStatusUseCase } from "../data/core/use-cases/fetch-status/FetchStatusUseCase";
import StatusPort from "../data/core/ports/StatusPort";
import StatusPortMastojsAdapter from "../data/adapters/status/StatusPortMastojsAdapter";
import StatusPortInMemoryAdapter from "../data/adapters/status/StatusPortInMemoryAdapter";

const container = new Container();
const env = process.env.NODE_ENV || "development";

// use cases
container.bind<UseCase>("fetch-feed").to(FetchFeedsUseCase);
container.bind<UseCase>("fetch-status").to(FetchStatusUseCase);

// adapters
if (env === "test") {
  container.bind<FeedPort>("feeds-port").to(FeedsPortInMemoryAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortInMemoryAdapter);
} else {
  container.bind<FeedPort>("feeds-port").to(FeedsPortMastojsAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortMastojsAdapter);
}

export { container };
