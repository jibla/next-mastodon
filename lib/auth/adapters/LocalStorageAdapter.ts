import { OAuthCredentials } from "../models/OAuthCredentials";
import { AbstractOAuthStorage } from "./AbstractOAuthStorage";
import * as fs from "fs/promises";

export class LocalStorageAdapter extends AbstractOAuthStorage {
  private filePath: string = process.env.OAUTH_LOCAL_STORAGE_FILE || "";

  private async readAllCredentials(): Promise<{
    [provider: string]: OAuthCredentials;
  }> {
    try {
      const data = await fs.readFile(this.filePath, { encoding: "utf8" });
      return JSON.parse(data);
    } catch (err) {
      console.error(`Error reading credentials from ${this.filePath}:`, err);
      throw err;
    }
  }

  async getCredentials(provider: string): Promise<OAuthCredentials> {
    const allCredentials = await this.readAllCredentials();
    return allCredentials[provider];
  }

  async saveCredentials(
    provider: string,
    credentials: OAuthCredentials,
  ): Promise<void> {
    let allCredentials;
    try {
      allCredentials = await this.readAllCredentials();
    } catch (err) {
      if (err.code === "ENOENT") {
        // If the file doesn't exist yet, create an empty credentials map
        allCredentials = {};
      } else {
        throw err;
      }
    }

    allCredentials[provider] = credentials;

    try {
      const data = JSON.stringify(allCredentials);
      await fs.writeFile(this.filePath, data, { encoding: "utf8" });
    } catch (err) {
      console.error(`Error writing credentials to ${this.filePath}:`, err);
      throw err;
    }
  }
}
