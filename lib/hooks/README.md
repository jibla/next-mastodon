# lib/hooks

This module is responsible for providing react custom hooks, which are used in the user interface to fetch and manipulate data. Most of the hooks are using `lib/data/` module to fetch data and then, they are used in the user interface to display it. Its good practice to use `use cases` defined in `lib/data/core/use-cases` to fetch and manipulate data with hooks.

## Hooks

- [useAction](./useAction.ts) - hook for performing actions on statuses (like, share, bookmark etc).

- [useFeed](./useFeed.ts) - hook for fetching feeds.

- [useStatus](./useStatus.ts) - hook for fetching single status.

- [useConversation](./useConversation.ts) - hook for fetching conversations.

- [useDmList](./useDmList.ts) - hook for fetching and sending direct messages.

- [usePublishStatus](./usePublishStatus.ts) - hook for publishing new status.

- [useReplyToStatus](./useReplyToStatus.ts) - hook for replying to a specific status or direct messsage.