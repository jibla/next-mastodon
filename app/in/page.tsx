"use client";

import Timeline from "@/components/feed/timeline";

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <Timeline type="public" />
    </div>
  );
}
