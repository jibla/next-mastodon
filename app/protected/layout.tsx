import { Menu } from "@/components/layout/menu";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar";

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
      <body>
        <div className="hidden md:block">
          <Menu />
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <Sidebar className="hidden lg:block" />
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
