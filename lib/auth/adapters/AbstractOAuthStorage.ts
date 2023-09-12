import { OAuthCredentials } from "../core/entities/OAuthCredentials";
import { StoragePort } from "../core/ports/StoragePort";

export abstract class AbstractOAuthStorage implements StoragePort {
  abstract getCredentials(provider: string): Promise<OAuthCredentials | null>;
  abstract saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void>;
}
