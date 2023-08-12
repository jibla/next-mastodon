# lib/core

This is the core module of the application, which defines the services for UI that provide the content from mastodon server API.

The module is built with ports and adapters pattern in mind. As we are depending on the masto.js library for the mastodon API client, we don't write the adapter for the API client, but we write the adapter for the UI. In other words, we don't have our custom repositories, for the mastodon API.

Our primary ports are:
    - IStatusesPort
    - IFeedPort
    - IAccountPort
    - IStreamingPort

And the adapters are respectively:
    - StatusesAdapter
    - FeedsAdapter
    - AccountAdapter
    - StreamingAdapter

Those service ports are used by the UI to get the data from the mastodon API using the neet/masto.js library client classes, acting as secondary port (repositories) in our cese. The UI doesn't know about the mastodon API, it only knows about the service ports.

The way UI uses this services is the custom react hooks, like useFeed, useAccount, useNotifications etc.

The folder structure for the core module is:

- models
    # Data structures representing the data from the mastodon API for React components.
    # In fact they match respetive component props.
    - Status.ts
    - Account.ts
    - Notification.ts
    - Feed.ts
- ports
    # This are data structures representing the data from the mastodon API for React components.
    # and in fact they match respetive component props.
    - IStatusPort.ts
    - IFeedPort.ts
    - IAccountPort.ts
    - IStreamingPort.ts
    ...
- adapters
    # This are the port adapters for the UI (react components).
    - StatusAdapter.ts
    - FeedsAdapter.ts
    - AccountAdapter.ts
    - StreamingAdapter.ts
    ...
- hooks
    - useFeed.ts
    - useAccount.ts
    - useNotifications.ts

