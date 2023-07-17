import { OAuthCredentials } from "../models/OAuthCredentials";
import { AbstractOAuthStorage } from "./AbstractOAuthStorage";
import { kv } from "@vercel/kv";

export class VercelKVAdapter extends AbstractOAuthStorage {
  async getCredentials(provider: string): Promise<OAuthCredentials | null> {
    try {
      const credentialFromStore = await kv.hgetall(provider);

      if (
        credentialFromStore &&
        credentialFromStore["clientId"] &&
        credentialFromStore["clientSecret"]
      ) {
        return {
          clientId: credentialFromStore["clientId"] as string,
          clientSecret: credentialFromStore["clientSecret"] as string,
        };
      }
    } catch (err) {
      //
    }

    return null;
  }

  async saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void> {
    try {
      await kv.hset(provider, JSON.parse(JSON.stringify(credentials)));
    } catch (error) {}
  }
}
