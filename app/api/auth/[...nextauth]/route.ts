import NextAuth, { type NextAuthOptions } from "next-auth";
import getMastodonConfig from "./mastodon-config";
import { NextRequest, NextResponse } from "next/server";
import url from "url";
import { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";

const getActiveServerOrRefererHost = (req: NextApiRequest) => {
  const activeServer = req.cookies.get("activeServer").value;

  if (activeServer) {
    return atob(activeServer);
  }

  const referer = req.headers.get("referer");
  if (referer) {
    const refererUrl = url.parse(referer);
    return refererUrl.host;
  }

  return null;
};

const handlerWrapper = async function (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const mastodonServer = getActiveServerOrRefererHost(req);

  const authOptions: NextAuthOptions = await getMastodonConfig(
    mastodonServer ?? "",
    env.NEXTAUTH_URL || "",
  );

  return NextAuth(req, res, authOptions);
};

export { handlerWrapper as GET, handlerWrapper as POST };
