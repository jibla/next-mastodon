# lib/data

This is the core module of the application, which provides the data for the UI and mechanisms to write data back to the mastodon API.

The module is built with ports and adapters pattern in mind.

The module is in active development and the structure is not final.

At the moment, our primary ports are:
    - FeedPort
    - StatusPort

For adapters, we have mastojs and in-memory implementations (for testing).

Inversify is used for dependency injection.

Finally, this module just defines ports (for example FeedPort, StatusPort etc) and different implementations for them (for example MastojsFeedAdapter, InMemoryFeedAdapter etc). Then, specific use cases (for example FetchFeedsUseCase, or FetchStatusUsecase) use those ports to manipulate, generate and return entity objects. This way makes operations on entities testable and free from specific frameworks (in our case, as we are building next.js application, mostly custom react hooks use them).