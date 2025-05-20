import FeedPortMastojsAdapter from "@/lib/data/adapters/feed/mastojs/FeedPortMastojsAdapter";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";

// Since getRepository is a private method, access it via casting to any
function callGetRepository(
  adapter: FeedPortMastojsAdapter,
  type: feedTypes,
  userId?: string,
) {
  return (adapter as any)["getRepository"]({} as any, type, userId);
}

describe("FeedPortMastojsAdapter.getRepository", () => {
  it("throws an error when user feed type is requested without userId", () => {
    const adapter = new FeedPortMastojsAdapter();
    expect(() => callGetRepository(adapter, feedTypes.user)).toThrow(Error);
  });
});
