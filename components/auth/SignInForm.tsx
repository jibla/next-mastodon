import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Terminal } from "lucide-react";
import { FormEvent, useState } from "react";
import { Icons } from "../ui/icons";
import { cn } from "../utils";
import SignInButton from "./SignInButton";

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

  const handleGoBack = () => {
    setServerAddress("");
    setShowNextAuth(false);
  };

  return (
    <>
      {/* TODO: Move this to a separate component */}
      <div className="relative">
        {errorMessage && (
          <Alert className="absolute top-0 left-0 mt-5 ml-5">
            <Terminal className="h-4 w-4 text-white" />
            <AlertTitle>Oops</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col space-y-2 text-center">
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
                    readOnly={showNextAuth}
                    className={
                      showNextAuth ? "bg-slate-200 border-slate-300" : ""
                    }
                  />
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    {showNextAuth && (
                      <Button
                        onClick={handleGoBack}
                        className="flex items-center focus:outline-none rounded-r-none border-r border-white p-2"
                      >
                        <Icons.goBack className="w-4 h-4 text-white-600" />
                      </Button>
                    )}
                    <SignInButton
                      loading={loading}
                      showNextAuth={showNextAuth}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
