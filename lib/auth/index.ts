import { VercelKV } from "@vercel/kv";
import { InMemoryStorageAdapter } from "./adapters/InMemoryStorageAdapter";
import { LocalStorageAdapter } from "./adapters/LocalStorageAdapter";
import { VercelKVAdapter } from "./adapters/VercelKVAdapter";
import { StoragePortInterface } from "./ports/StoragePortInterface";

export default class OAuthCredentialsStorageService {
  private static storageInstance: StoragePortInterface;

  public static createStorage(): StoragePortInterface {
    if (this.storageInstance) {
      return this.storageInstance;
    }

    const env = process.env.NODE_ENV || "development";

    switch (env) {
      case "production":
        this.storageInstance = new VercelKVAdapter();
        break;
      case "development":
        this.storageInstance = new VercelKVAdapter();
        break;
      case "test":
        this.storageInstance = new InMemoryStorageAdapter();
        break;
      default:
        this.storageInstance = new InMemoryStorageAdapter();
    }

    return this.storageInstance;
  }
}
