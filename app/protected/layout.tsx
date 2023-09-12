import { Menu } from "@/components/layout/menu";
import { Sidebar } from "@/components/layout/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import "@/styles/globals.css";
import { Metadata } from "next";

const title = "Next Mastodon";
const description = "Mastodon client built with Next.js";

export const metadata: Metadata = {
  title,
  description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black p-3">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <Menu />
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block" />
                <div className="col-span-3 lg:col-span-4">
                  <ScrollArea className="px-4">{children}</ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
