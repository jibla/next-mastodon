import { OAuthCredentials } from "../models/OAuthCredentials";
import { AbstractOAuthStorage } from "./AbstractOAuthStorage";

export class InMemoryStorageAdapter extends AbstractOAuthStorage {
  private store: Record<string, OAuthCredentials> = {};

  async getCredentials(provider: string): Promise<OAuthCredentials> {
    return this.store[provider];
  }

  async saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void> {
    this.store[provider] = credentials;
  }
}
