# lib/auth

This tiny module just provides the mechanism (ports and adapters) to store and read OAuth credentials for different Mastodon servers.

At the moment, we have three adapters. One is `LocalStorageAdapter` for development, which uses files. There exists `InMemoryStorageAdapter` for testing and finally primary storage for production is Vercel's KV (Reddis) adapter - `VercelKVAdapter`.