import OAuthCredentialsStorageService from "@/lib/auth";

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
        //todo: read this from environments
        redirect_uris: "http://localhost:3000/api/auth/callback/mastodon",
      }),
    });
    const data = await serverCredentials.json();

    if (data.client_id && data.client_secret) {
      await tokensStorage.saveCredentials(serverBaseUrl, {
        clientId: data.client_id,
        clientSecret: data.client_secret,
      });

      return true;
    }
  } catch {
    return false;
  }

  return false;
}
