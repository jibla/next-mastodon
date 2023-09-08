import { FeedsPortInMemoryAdapter } from "./adapters/feed/in-memory/FeedsPortInMemoryAdapter";
import FeedsPortMastojsAdapter from "./adapters/feed/mastojs/FeedsPortMastojsAdapter";
import StatusPortMastojsAdapter from "./adapters/status/StatusPortMastojsAdapter";
import IFeedPort from "./ports/IFeedPort";
import IStatusPort from "./ports/IStatusPort";

//TODO: standardize how we get the environment
const env = process.env.NODE_ENV || "development";

export const UIAdaptersFactory = {
  statusPort(): IStatusPort {
    return new StatusPortMastojsAdapter();
  },

  FeedsPort(): IFeedPort {
    switch (env) {
      case "test":
        return new FeedsPortInMemoryAdapter();
      default:
        return new FeedsPortMastojsAdapter();
    }
  },
};
