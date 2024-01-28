import { Feed } from "../entities/Feed";

export enum feedTypes {
  home = "home",
  public = "public",
  local = "local",
  user = "user",
}

export interface getFeedParams {
  type: feedTypes;
  limit?: number;
  startFrom?: string;
  userId?: string;
}

export interface getFeedOutput {
  feed: Feed;
  next: () => Promise<getFeedOutput>;
}

export default interface FeedPort {
  getFeed(params: getFeedParams): Promise<getFeedOutput>;
}
