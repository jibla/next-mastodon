"use client";

import React, { useEffect, useState } from "react";
import Timeline from "@/components/feed/timeline";
import useFeed from "@/lib/core/hooks/useFeed";

export default function Home() {
  const { feed, loading } = useFeed("public");

  return (
    !loading && (
      <div className="flex h-screen justify-center">
        <Timeline statuses={feed.statuses} />
      </div>
    )
  );
}
