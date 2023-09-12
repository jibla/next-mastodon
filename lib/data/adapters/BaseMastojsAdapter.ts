import { injectable } from "inversify";
import Cookies from "js-cookie";
import { createRestAPIClient, mastodon } from "masto";

@injectable()
export default class BaseMastojsAdapter {
  protected client: mastodon.rest.Client | undefined;

  constructor() {
    //TODO: move this to libs to share whenever it is needed
    let activeServer = Cookies.get("activeServer");
    if (activeServer) {
      activeServer = atob(activeServer);
    }

    if (activeServer) {
      this.client = createRestAPIClient({
        url: activeServer,
      });
    }
  }
}
