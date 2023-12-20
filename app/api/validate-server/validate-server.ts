import OAuthCredentialsStorageService from "@/lib/auth";
import { env } from "process";

export default async function validateMastodonServer(
  serverBaseUrl: string,
): Promise<boolean> {
  const tokensStorage = OAuthCredentialsStorageService.createStorage();
  const credentials = await tokensStorage.getCredentials(serverBaseUrl);

  if (credentials) {
    return true;
  }

  try {
    const serverCredentials = await fetch(serverBaseUrl + "/api/v1/apps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: "next-mastodon",
        redirect_uris: env.NEXTAUTH_URL + "/api/auth/callback/mastodon",
        scopes: "read write follow",
      }),
    });

    if (serverCredentials.ok) {
      const data = await serverCredentials.json();

      if (data.client_id && data.client_secret) {
        await tokensStorage.saveCredentials(serverBaseUrl, {
          clientId: data.client_id,
          clientSecret: data.client_secret,
        });

        return true;
      }
    } else {
      console.log(
        "Error:",
        serverCredentials.status,
        serverCredentials.statusText,
      );
      return false;
    }
  } catch (error) {
    return false;
  }

  return false;
}
