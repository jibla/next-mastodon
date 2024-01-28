import { Container, interfaces } from "inversify";
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
import { getSession } from "next-auth/react";
import { ActionsUseCase } from "../data/core/use-cases/actions/ActionsUseCase";
import { ActionsPortInMemoryAdapter } from "../data/adapters/actions/ActionsPortInMemoryAdapter";
import ActionsPort from "../data/core/ports/ActionsPort";
import { ActionsPortMastojsAdapter } from "../data/adapters/actions/ActionsPortMastojsAdapter";
import { PublishStatusUseCase } from "../data/core/use-cases/publish-status/PublishStatusUseCase";
import DirectMessagesPort from "../data/core/ports/DirectMessagesPort";
import DirectMessagesPortInMemoryAdapter from "../data/adapters/direct-messages/DirectMessagesPortInMemoryAdapter";
import { ListDirectMessagesUseCase } from "../data/core/use-cases/list-direct-messages/ListDirectMessagesUseCase";
import { DirectMessagesPortMastojsAdapter } from "../data/adapters/direct-messages/DirectMessagesPortMastojsAdapter";
import { ReadConversationUseCase } from "../data/core/use-cases/read-conversation/ReadConversationUseCase";
import { ReplyToDmUseCase } from "../data/core/use-cases/reply-to-dm/ReplyToDmUseCase";

const container = new Container();
const env = process.env.NODE_ENV || "development";

// use cases
container.bind<UseCase>("fetch-feed").to(FetchFeedsUseCase);
container.bind<UseCase>("fetch-status").to(FetchStatusUseCase);
container.bind<UseCase>("actions").to(ActionsUseCase);
container.bind<UseCase>("publish-status").to(PublishStatusUseCase);
container.bind<UseCase>("list-direct-messages").to(ListDirectMessagesUseCase);
container.bind<UseCase>("read-conversation").to(ReadConversationUseCase);
container.bind<UseCase>("reply-to-dm").to(ReplyToDmUseCase);

// adapters
if (env === "test") {
  container.bind<FeedPort>("feed-port").to(FeedsPortInMemoryAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortInMemoryAdapter);
  container.bind<ActionsPort>("actions-port").to(ActionsPortInMemoryAdapter);
  container
    .bind<DirectMessagesPort>("direct-messages-port")
    .to(DirectMessagesPortInMemoryAdapter);
} else {
  container.bind<FeedPort>("feed-port").to(FeedsPortMastojsAdapter);
  container.bind<StatusPort>("status-port").to(StatusPortMastojsAdapter);
  container.bind<ActionsPort>("actions-port").to(ActionsPortMastojsAdapter);
  container
    .bind<DirectMessagesPort>("direct-messages-port")
    .to(DirectMessagesPortMastojsAdapter);
}

export { container };
