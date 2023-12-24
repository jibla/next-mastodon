"use client";

import { Menu } from "@/components/layout/Menu";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Allotment } from "allotment";
import "node_modules/allotment/dist/style.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SessionProvider } from "next-auth/react";

// const title = "Next Mastodon";
// const description = "Mastodon client built with Next.js";

// export const metadata: Metadata = {
//   title,
//   description,
// };

export default function Layout({
  children,
  navbar,
  left,
  right,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="bg-black p-3">
          <div className="overflow-hidden rounded-lg border bg-background shadow">
            <Menu />
            <div className="border-t">
              <div className="bg-background">
                <div
                  className="w-screen h-screen"
                  style={{ maxHeight: "calc(100vh - 5.5rem)" }}
                >
                  <Allotment>
                    <Allotment.Pane maxSize={250} minSize={249} snap={true}>
                      {navbar}
                    </Allotment.Pane>
                    <Allotment.Pane minSize={400}>
                      <ScrollArea
                        className="h-screen"
                        style={{ maxHeight: "calc(100vh - 5.5rem)" }}
                      >
                        <div className="p-8">{left}</div>
                      </ScrollArea>
                    </Allotment.Pane>
                    <Allotment.Pane minSize={400}>
                      <ScrollArea
                        className="h-screen"
                        style={{ maxHeight: "calc(100vh - 5.5rem)" }}
                      >
                        {right}
                      </ScrollArea>
                    </Allotment.Pane>
                  </Allotment>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
