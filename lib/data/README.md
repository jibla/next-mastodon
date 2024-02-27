# lib/data

This module serves as the core of the application, providing data for the user interface and mechanisms to write data back to the Mastodon API.

The module is built with ports and adapters pattern in mind.

At the moment, our primary ports are:

- `FeedPort` - is used for use cases, which require fetching feeds from API and constructing `Feed` entities.

- `StatusPort` - used for use cases, which are reponsible for creating `Status` entities.

- `DmPort` - used for use cases, which deal with conversations and direct messages.

- `ActionPort` - used for use cases, when user acts on a statuis (like, share, bookmark etc).

For adapters, we have mastojs and in-memory implementations (for testing).

Inversify is used for dependency injection.

Finally, central view is that, this module defines ports and different implementations for them (for example `FeedPortMastojsAdapter` or `FeedPortInMemoryAdapter`) and then, there are specific use cases (`/lib/data/core/use-cases`) for business logic (for example `FetchFeedsUseCase`, or `ActionsUseCase`), which use those ports to manipulate, generate and return entity objects (which can be found in `./core/entities` folder.).

This way makes operations on entities testable and free from specific frameworks (in our case, as we are building next.js application, mostly custom react hooks use them).