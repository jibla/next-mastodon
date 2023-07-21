import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignInButton() {
  return (
    <>
      <Button className="mt-1 mb-1" onClick={() => signIn("mastodon")}>
        Sign in
      </Button>
    </>
  );
}
