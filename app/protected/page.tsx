"use client";

import React, { useEffect, useState } from "react";
import Timeline from "@/components/feed/timeline";

export default function Home() {
  return (
    <div className="flex h-screen justify-center">
      <Timeline type="public" />;
    </div>
  );
}
