import FeedsPortMastojsAdapter from "./adapters/FeedsPortMastojsAdapter";
import StatusPortMastojsAdapter from "./adapters/StatusPortMastojsAdapter";
import IFeedPort from "./ports/IFeedPort";
import IStatusPort from "./ports/IStatusPort";

export const UIAdaptersFactory = {
  statusPort(): IStatusPort {
    return new StatusPortMastojsAdapter();
  },

  FeedsPort(): IFeedPort {
    return new FeedsPortMastojsAdapter();
  },
};
