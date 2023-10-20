"use client";

import Timeline from "@/components/feed/timeline";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Allotment } from "allotment";
import "node_modules/allotment/dist/style.css";

export default function Home() {
  return (
    <div
      className="w-full h-screen"
      style={{ maxHeight: "calc(100vh - 5.5rem)" }}
    >
      <Allotment>
        <ScrollArea
          className="h-screen"
          style={{ maxHeight: "calc(100vh - 5.5rem)" }}
        >
          <Timeline type="public" />
        </ScrollArea>
        <Allotment.Pane snap>
          <div className="p-4">details pane</div>
        </Allotment.Pane>
      </Allotment>
    </div>
  );
}
