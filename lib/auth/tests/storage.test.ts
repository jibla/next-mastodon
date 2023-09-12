import OAuthCredentialsStorageService from "..";

test("storage mechanics work", async () => {
  //TODO: need to find out solution for TextDecoder error related to redis.
  // const provider = "https://mastodon.social";
  // let credetnialsStorage = OAuthCredentialsStorageService.createStorage();
  // const credentials = await credetnialsStorage.getCredentials(provider);
  // expect(credentials).toBeUndefined();
  // const creds: OAuthCredentials = {
  //   clientId: "clientId",
  //   clientSecret: "clientSecret",
  // };
  // credetnialsStorage.saveCredentials(provider, creds);
  // const credentialsAfter = await credetnialsStorage.getCredentials(provider);
  // expect(credentialsAfter).toBe(creds);
});
