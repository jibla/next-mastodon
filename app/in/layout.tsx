"use client";

import { Menu } from "@/components/layout/menu";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Allotment } from "allotment";
import "node_modules/allotment/dist/style.css";

// const title = "Next Mastodon";
// const description = "Mastodon client built with Next.js";

// export const metadata: Metadata = {
//   title,
//   description,
// };

export default function Layout({
  children,
  navbar,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
}) {
  return (
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
                  <Allotment.Pane maxSize={200} minSize={199} snap={true}>
                    {navbar}
                  </Allotment.Pane>
                  <div>{children}</div>
                  <div className="p-4"></div>
                </Allotment>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
