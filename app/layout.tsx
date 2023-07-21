import Header from "@/components/layout/header";
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
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
