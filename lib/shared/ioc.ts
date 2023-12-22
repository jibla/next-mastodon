import { Container } from "inversify";
import "reflect-metadata";
import { ActionsPortInMemoryAdapter } from "../data/adapters/actions/ActionsPortInMemoryAdapter";
import { ActionsPortMastojsAdapter } from "../data/adapters/actions/ActionsPortMastojsAdapter";
import { FeedsPortInMemoryAdapter } from "../data/adapters/feed/in-memory/FeedsPortInMemoryAdapter";
import FeedsPortMastojsAdapter from "../data/adapters/feed/mastojs/FeedsPortMastojsAdapter";
import StatusPortInMemoryAdapter from "../data/adapters/status/StatusPortInMemoryAdapter";
import StatusPortMastojsAdapter from "../data/adapters/status/StatusPortMastojsAdapter";
import ActionsPort from "../data/core/ports/ActionsPort";
import FeedPort from "../data/core/ports/FeedPort";
import StatusPort from "../data/core/ports/StatusPort";
import { ActionsUseCase } from "../data/core/use-cases/actions/ActionsUseCase";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { FetchStatusUseCase } from "../data/core/use-cases/fetch-status/FetchStatusUseCase";
import { PublishStatusUseCase } from "../data/core/use-cases/publish-status/PublishStatusUseCase";
import { UseCase } from "./use-cases/UseCaseInterface";

const container = new Container();
const env = process.env.NODE_ENV || "development";

// use cases
container.bind<UseCase>("fetch-feed").to(FetchFeedsUseCase);
container.bind<UseCase>("fetch-status").to(FetchStatusUseCase);
container.bind<UseCase>("actions").to(ActionsUseCase);
container.bind<UseCase>("publish-status").to(PublishStatusUseCase);

// adapters
if (env === "test") {
  container.bind<FeedPort>("feed-port").to(FeedsPortInMemoryAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortInMemoryAdapter);
  container.bind<ActionsPort>("actions-port").to(ActionsPortInMemoryAdapter);
} else {
  container.bind<FeedPort>("feed-port").to(FeedsPortMastojsAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortMastojsAdapter);
  container.bind<ActionsPort>("actions-port").to(ActionsPortMastojsAdapter);
}

export { container };
