import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import SignInButton from "./SignInButton";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function SignInForm() {
  const [showNextAuth, setShowNextAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverAddress, setServerAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);

    const encryptedServerAddress = btoa(serverAddress);

    const res = await fetch("/api/validate-server/" + encryptedServerAddress);
    if (res.status === 200) {
      //TODO: set proper lifetime
      document.cookie = "activeServer=" + encryptedServerAddress + "; path=/";
      setShowNextAuth(true);
      setErrorMessage("");
    }

    if (res.status === 400) {
      const error = await res.json();

      switch (error.code) {
        case "ConnectionFailure":
          setErrorMessage(
            "Unable to connect. Please verify the Mastodon server is operational and try again.",
          );
          break;

        case "InvalidURLFormat":
          setErrorMessage(
            "The URL entered is invalid. Please check the format and try again.",
          );
          break;

        default:
          break;
      }
    }

    setLoading(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col space-y-2 text-center">
          {errorMessage && (
            <div
              className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign In with your Mastodon server
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter the mastodon server address
          </p>

          <div className={cn("grid gap-6")}>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label htmlFor="server-address" className="sr-only">
                    Mastodon Server Address
                  </Label>
                  <Input
                    required
                    name="server-address"
                    id="server-address"
                    placeholder="Server Address"
                    value={serverAddress}
                    type="text"
                    onChange={(e) => setServerAddress(e.target.value)}
                  />
                </div>
                <div>
                  <Button disabled={loading}>Continue</Button>
                  {loading && (
                    <div className="mt-4 mb-4 w-6 h-6 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                  )}
                  {showNextAuth && (
                    <div>
                      <SignInButton />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
