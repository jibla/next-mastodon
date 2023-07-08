import {
  InMemoryStorage,
  InMemoryStorageAdapter,
} from "./adapters/InMemoryStorageAdapter";
import { LocalStorageAdapter } from "./adapters/LocalStorageAdapter";
import { StoragePortInterface } from "./ports/StoragePortInterface";

export default class OAuthCredentialsStorageService {
  private static storageInstance: StoragePortInterface;

  public static createStorage(): StoragePortInterface {
    if (this.storageInstance) {
      return this.storageInstance;
    }

    const env = process.env.NODE_ENV || "development";
    switch (env) {
      //todo: add real storage
      case "production":
        this.storageInstance = new LocalStorageAdapter();
        break;
      case "development":
        this.storageInstance = new LocalStorageAdapter();
      case "test":
        this.storageInstance = new InMemoryStorageAdapter();
      default:
        this.storageInstance = new LocalStorageAdapter();
    }

    return this.storageInstance;
  }
}
