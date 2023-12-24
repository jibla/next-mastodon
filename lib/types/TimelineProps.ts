import { feedTypes } from "../data/core/ports/FeedPort";

export interface TimelineProps {
  type: feedTypes;
  startFrom?: string;
  userId?: string;
}
