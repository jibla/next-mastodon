import { OAuthCredentials } from "../models/OAuthCredentials";
import { StoragePortInterface } from "../ports/StoragePortInterface";

export abstract class AbstractOAuthStorage implements StoragePortInterface {
  abstract getCredentials(provider: string): Promise<OAuthCredentials>;
  abstract saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void>;
}
