"use client";

import Timeline from "@/components/feed/Timeline";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";

export default function LocalLeft() {
  return <Timeline type={feedTypes.local} />;
}
