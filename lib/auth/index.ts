import { InMemoryStorageAdapter } from "./adapters/InMemoryStorageAdapter";
import { LocalStorageAdapter } from "./adapters/LocalStorageAdapter";
import { VercelKVAdapter } from "./adapters/VercelKVAdapter";
import { StoragePort } from "./core/ports/StoragePort";

export default class OAuthCredentialsStorageService {
  private static storageInstance: StoragePort;

  public static createStorage(): StoragePort {
    //TODO: standardize how we get the environment
    const env = process.env.NODE_ENV || "development";

    if (this.storageInstance) {
      return this.storageInstance;
    }

    switch (env) {
      case "test":
        this.storageInstance = new InMemoryStorageAdapter();
        break;
      case "production":
        this.storageInstance = new VercelKVAdapter();
        break;
      case "development":
        this.storageInstance = new LocalStorageAdapter();
        break;
      default:
        this.storageInstance = new InMemoryStorageAdapter();
    }

    return this.storageInstance;
  }
}
