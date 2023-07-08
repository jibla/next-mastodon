import OAuthCredentialsStorageService from "..";

function runTests(name: string) {
  describe(name, () => {
    const storage = OAuthCredentialsStorageService.createStorage();

    it("should store and retrieve credentials", async () => {
      const credentials = { clientId: "test", clientSecret: "secret" };
      await storage.saveCredentials("provider", credentials);

      const result = await storage.getCredentials("provider");
      expect(result).toEqual(credentials);
    });

    it("should return undefined if no credentials exist for provider", async () => {
      const result = await storage.getCredentials("nonexistent");
      expect(result).toBeUndefined();
    });
  });
}
