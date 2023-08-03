"use client";

import React, { useEffect, useState } from "react";
import Timeline from "@/components/feed/timeline";
import { timelineService } from "@/lib/services/timeline";
import { createRestAPIClient } from "masto";
import { StatusProps } from "@/lib/types/StatusProps";
import Cookies from "js-cookie";

export default function Home() {
  const [results, setResults] = useState<StatusProps[]>([]);

  useEffect(() => {
    async function fetchTimeline() {
      //TODO: move this to libs to share whenever it is needed
      let activeServer = Cookies.get("activeServer");
      if (activeServer) {
        activeServer = atob(activeServer);
      }

      if (activeServer) {
        const client = createRestAPIClient({
          url: activeServer,
        });

        const timelineData = await timelineService(client).public();
        setResults(timelineData);
      }
    }
    fetchTimeline();
  }, []);

  return (
    results && (
      <div className="flex h-screen justify-center">
        <Timeline statuses={results} />
      </div>
    )
  );
}
