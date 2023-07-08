import { NextRequest, NextResponse } from "next/server";
import validateMastodonServer from "../validate-server";
import { Response } from "node-fetch";

export async function GET(
  request: NextRequest,
  context: { params: { address: string } },
) {
  let { address } = context.params;
  address = atob(address);

  const isValid = await validateMastodonServer(address);

  if (!isValid) {
    return NextResponse.json({}, { status: 400 });
  } else {
    return NextResponse.json({}, { status: 200 });
  }
}
