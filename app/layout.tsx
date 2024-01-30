import MobileView from "@/components/shared/MobileView";
import "@/styles/globals.css";
import { Metadata } from "next";
import { headers } from "next/headers";

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
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  let isMobile = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  return (
    <html lang="en">
      <body>{isMobile ? <MobileView /> : children}</body>
    </html>
  );
}
