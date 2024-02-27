import { Container } from "inversify";
import "reflect-metadata";
import { UseCase } from "./use-cases/UseCaseInterface";
import { FetchFeedsUseCase } from "../data/core/use-cases/fetch-feeds/FetchFeedsUseCase";
import { FetchStatusUseCase } from "../data/core/use-cases/fetch-status/FetchStatusUseCase";
import { ActionsUseCase } from "../data/core/use-cases/actions/ActionsUseCase";
import { PublishStatusUseCase } from "../data/core/use-cases/publish-status/PublishStatusUseCase";
import { ReadConversationUseCase } from "../data/core/use-cases/read-conversation/ReadConversationUseCase";
import { ReplyToStatusUseCase } from "../data/core/use-cases/reply-to-status/ReplyToStatusUseCase";
import { FetchStatusThreadUseCase } from "../data/core/use-cases/fetch-status-thread/FetchStatusThreadUseCase";
import FeedPort from "../data/core/ports/FeedPort";
import StatusPort from "../data/core/ports/StatusPort";
import ActionPort from "../data/core/ports/ActionPort";
import { FeedPortInMemoryAdapter } from "../data/adapters/feed/in-memory/FeedPortInMemoryAdapter";
import StatusPortInMemoryAdapter from "../data/adapters/status/StatusPortInMemoryAdapter";
import { ActionPortInMemoryAdapter } from "../data/adapters/actions/ActionPortInMemoryAdapter";
import DmPort from "../data/core/ports/DmPort";
import DmPortInMemoryAdapter from "../data/adapters/direct-messages/DmPortInMemoryAdapter";
import FeedPortMastojsAdapter from "../data/adapters/feed/mastojs/FeedPortMastojsAdapter";
import StatusPortMastojsAdapter from "../data/adapters/status/StatusPortMastojsAdapter";
import { ActionPortMastojsAdapter } from "../data/adapters/actions/ActionPortMastojsAdapter";
import { ListConversationsUseCase } from "../data/core/use-cases/list-conversations/ListConversationsUseCase";

const container = new Container();
const env = process.env.NODE_ENV || "development";

// use cases
container.bind<UseCase>("fetch-feed").to(FetchFeedsUseCase);
container.bind<UseCase>("fetch-status").to(FetchStatusUseCase);
container.bind<UseCase>("actions").to(ActionsUseCase);
container.bind<UseCase>("publish-status").to(PublishStatusUseCase);
container.bind<UseCase>("list-conversations").to(ListConversationsUseCase);
container.bind<UseCase>("read-conversation").to(ReadConversationUseCase);
container.bind<UseCase>("reply-to-status").to(ReplyToStatusUseCase);
container.bind<UseCase>("fetch-status-thread").to(FetchStatusThreadUseCase);

// adapters
if (env === "test") {
  container.bind<FeedPort>("feed-port").to(FeedPortInMemoryAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortInMemoryAdapter);
  container.bind<ActionPort>("action-port").to(ActionPortInMemoryAdapter);
  container.bind<DmPort>("dm-port").to(DmPortInMemoryAdapter);
} else {
  container.bind<FeedPort>("feed-port").to(FeedPortMastojsAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortMastojsAdapter);
  container.bind<ActionPort>("action-port").to(ActionPortMastojsAdapter);
  container.bind<DmPort>("dm-port").to(DmPortInMemoryAdapter);
}

export { container };
