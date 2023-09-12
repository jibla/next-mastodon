import { Feed } from "../entities/Feed";

export default interface FeedPort {
  getFeed(type: string): Promise<Feed>;
}
