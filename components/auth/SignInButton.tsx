import { signIn } from "next-auth/react";
import { Button } from "../shadcnui/button";
import { Icons } from "../shadcnui/icons";

interface SignInButtonProps {
  loading: boolean;
  showNextAuth: boolean;
}
export default function SignInButton({
  loading,
  showNextAuth,
}: SignInButtonProps) {
  return (
    <Button
      className={`mt-1 mb-1 ${showNextAuth ? "rounded-l-none" : ""}`}
      disabled={loading}
      {...(showNextAuth ? { onClick: () => signIn("mastodon") } : {})}
    >
      {showNextAuth ? "Sign in" : "Continue"}
      {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
