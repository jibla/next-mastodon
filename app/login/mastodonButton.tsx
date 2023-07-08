import { signIn } from "next-auth/react";

export default function MastodonButton() {
  return (
    <>
      <button onClick={() => signIn("mastodon")}>Sign in</button>
    </>
  );
}
