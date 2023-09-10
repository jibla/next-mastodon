import { OAuthCredentials } from "../entities/OAuthCredentials";

export interface StoragePort {
  getCredentials(provider: string): Promise<OAuthCredentials | null>;
  saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void>;
}
