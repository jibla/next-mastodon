import { createRestAPIClient, mastodon } from "masto";
import Cookies from "js-cookie";

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
