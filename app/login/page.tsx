"use client";

import SignInButton from "@/components/auth/SignInButton";
import { FormEvent, useState } from "react";

export default function LoginPage() {
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
        {errorMessage && (
          <div
            className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="server-address"
              >
                Mastodon Server Address
              </label>
              <input
                required
                name="server-address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="server-address"
                type="text"
                placeholder="Server Address"
                value={serverAddress}
                onChange={(e) => setServerAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                disabled={loading}
              >
                Continue
              </button>
              {loading && (
                <div className="mt-4 mb-4 w-6 h-6 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
              )}
              {showNextAuth && (
                <div>
                  <SignInButton />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
