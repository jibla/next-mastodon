import "@testing-library/jest-dom";
import validateMastodonServer from "@/app/api/validate-server/validate-server";
import OAuthCredentialsStorageService from "@/lib/auth";

fetchMock.disableMocks();

// we only test our code not auth.js behaviour
describe("Integration tests for authentication flow", () => {
  test("fetch oauth credentials from valid mastodon server", async () => {
    const validAddress = "https://mastodon.social";

    const isValid = await validateMastodonServer(validAddress);
    expect(isValid).toBe(true);

    const storage = OAuthCredentialsStorageService.createStorage();
    const creds = await storage.getCredentials(validAddress);
    expect(creds?.clientId).not.toBeNull();
    expect(creds?.clientSecret).not.toBeNull();
  });

  test("fetch oauth credentials from invalid mastodon server", async () => {
    const validAddress = "https://invalid.mastodon.server";

    const isValid = await validateMastodonServer(validAddress);
    expect(isValid).toBe(false);

    const storage = OAuthCredentialsStorageService.createStorage();
    const creds = await storage.getCredentials(validAddress);
    expect(creds?.clientId).not.toBeNull();
    expect(creds?.clientSecret).not.toBeNull();
  });
});

fetchMock.disableMocks();
