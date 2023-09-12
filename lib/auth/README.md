# lib/auth

This tiny module just provides the mechanism (ports and adapters) to store and read OAuth credentials for different Mastodon servers.

At the moment, we have LocalStorageAdapter for development to use files and InMemoryStorageAdapter for testing. Primary storage for production is Vercel's KV (Reddis) and respective adapter is VercelKVAdapter.