import { OAuthCredentials } from "../models/OAuthCredentials";

export interface StoragePortInterface {
  getCredentials(provider: string): Promise<OAuthCredentials | null>;
  saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void>;
}
