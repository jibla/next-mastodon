"use client";

import Timeline from "@/components/feed/timeline";
import { feedTypes } from "@/lib/data/core/ports/FeedPort";

export default function Left() {
  return <Timeline type={feedTypes.home} />;
}
