import NextAuth, { type NextAuthOptions } from "next-auth";
import getMastodonConfig from "./mastodon-config";

const handlerWrapper = async function (req: Request, res: Response) {
  const authOptions: NextAuthOptions = await getMastodonConfig(
    "https://mastodon.social",
    "http://localhost:3000",
  );

  return NextAuth(authOptions);
};

export { handlerWrapper as GET, handlerWrapper as POST };
