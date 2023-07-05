import NextAuth, { type NextAuthOptions } from "next-auth";
import getMastodonConfig from "@/lib/mastodon-config";

export const authOptions: NextAuthOptions = await getMastodonConfig("https://mastodon.social", "http://localhost:3000");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
