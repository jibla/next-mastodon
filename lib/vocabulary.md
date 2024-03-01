# Vocabulary and Naming Conventions

## Vocabulary

Although Next Mastodon is a Mastodon client, we have our own vocabulary to describe the concepts of the application. This is to make the codebase more readable and to avoid confusion with the Mastodon API. Our terms not necessarily match the Mastodon API terms, but they are close enough to be understandable.

- `Status` - Status is the central thing that represents a post (toot) on Mastodon. In mastodon API it represents [status](https://docs.joinmastodon.org/entities/Status/) entity.

- `Feed` - A feed is a collection of statuses based on various criteria. In the Mastodon API, it represents [timelines](https://docs.joinmastodon.org/entities/feed/) with different filter types. We have a single concept of a feed that describes the collection of statuses. Additionally, we have different methods of constructing the feed, such as `home`, `local`, `public`, or with tag/search keyword filters. User statuses and replies to a status are also considered feeds and there are other types of feeds as well. Overall, in our application, a feed is any collection of statuses.

- `Action` - An action is a user interaction with the `Status`. It can be a `like`, a `share`, `bookmark` and other types of interactions that are defined by the Mastodon API.

- `DM` - Direct Message. A private message between two users. In the Mastodon API it actually is a `Status`. For more clarity, we use `DM` to represent a direct message.

- `Conversation` - A conversation is a collection of statuses between two or more users with "direct message" visibility. In the Mastodon API, it is represented by the [conversation](https://docs.joinmastodon.org/entities/Conversation/) entity. We can fetch the list of conversations from Mastodon API and then fetch the `DMs` which technically are `Status` entities.

- `Thread` - We call thread a collection of statuses that are connected by replies to a source status. In the Mastodon API, it is related to the [Contexts](https://docs.joinmastodon.org/entities/Context/) concept.

## Naming Conventions

### Entities

For entities, when they match things described in Vocabulary section, we use the word exactly. For example, `Status`, `Feed` etc. When we need to describe a concept that is not mentioned in above list, we use the word in singular form. For example, `User`, `Notification` etc.

### Ports

Port interface names should be descriptive and should should be suffixed with `Port`. Its recommended to use words from the vocabulary section to name the ports and to use them in singular form. For example, `StatusPort`, `FeedPort` etc.

### Adapters

As adapters are the implementation of the ports, they should be suffixed with `Adapter` and should be named after the port they are implementing.

Use the following naming convention for the adapters:
`[PortName][Implementation]Adapter`

For example, if we have a `StatusPort` and we are implementing it with in-memory storage, we should name the adapter `StatusPortInMemoryAdapter`. If we are implementing the `StatusPort` with mastojs library, we should name the adapter `StatusPortMastojsAdapter`.

### Use Cases

Use cases are the application specific business logic. For each use case, we should have a folder in the libraries `core/use-cases` directory (for example `/lib/data/core/use-cases`). The folder should be named with lower case letters and words should be separated with hyphens. The folder name should describe the action the use case is performing. For example, `fetch-status`, `like-status` etc.

The folder should consist (at least) two files: `description.md` and the class file implementing the use case. The class file should be named after the action it is performing and should be suffixed by the UseCase For example, `FetchStatusUseCase`, `LikeStatusUseCase` etc.

Its recommended to use exact same naming for folders and class names. For example, if the folder is named `fetch-status`, the class file should be named `FetchStatusUseCase`.

### React Hooks

Custom react hooks, should be placed in `/lib/hooks` directory. They should be named after the action they are performing and obviously should be preffixed with `use`. Try to use the same words when applicable, that are described in above vocabulary. Examples: `useStatus`, `useFeed`, `useLikeStatus` etc.

### React Components

All react components should be placed in the `/components` directory. The components can be grouped in subdirectories based on their functionality. The component name should be descriptive.