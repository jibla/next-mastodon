"use client";

import Timeline from "@/components/feed/timeline";

export default function StatusPageLeft({ params }: { params: { id: string } }) {
  return <Timeline type="public" startFrom={params.id} />;
}
