"use client";

import Timeline from "@/components/feed/timeline";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Left() {
  return (
    <ScrollArea
      className="h-screen"
      style={{ maxHeight: "calc(100vh - 5.5rem)" }}
    >
      <Timeline type="public" />
    </ScrollArea>
  );
}
