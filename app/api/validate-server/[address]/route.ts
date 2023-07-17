import { NextRequest, NextResponse } from "next/server";
import validateMastodonServer from "../validate-server";

function isValidHttpUrl(address: string): boolean {
  let url;

  try {
    url = new URL(address);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export async function GET(
  request: NextRequest,
  context: { params: { address: string } },
) {
  let { address } = context.params;
  address = atob(address);

  if (!isValidHttpUrl(address)) {
    return NextResponse.json(
      {
        code: "InvalidURLFormat",
        message:
          "The provided serverAddress is not a valid URL. Please check the format and try again.",
      },
      { status: 400 },
    );
  }

  const isValid = await validateMastodonServer(address);

  if (!isValid) {
    return NextResponse.json(
      {
        code: "ConnectionFailure",
        message:
          "Failed to connect to the server at the provided serverAddress. Please ensure that the serverAddress is correct and that the server is available.",
      },
      { status: 400 },
    );
  } else {
    return NextResponse.json({}, { status: 200 });
  }
}
