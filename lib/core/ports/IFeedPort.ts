import { Feed } from "../models/Feed";

export default interface IFeedPort {
  getFeed(type: string): Promise<Feed>;
}
