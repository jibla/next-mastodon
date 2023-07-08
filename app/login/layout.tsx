"use client";

import { FormEvent, useState } from "react";
import MastodonButton from "./mastodonButton";

export default function Layout(props: {
  children: React.ReactNode;
  nextAuthSignin: React.ReactNode;
}) {
  const [showNextAuth, setShowNextAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let serverAddress = event.target["server-address"].value || "";
    serverAddress = btoa(serverAddress);

    setLoading(true);

    const res = await fetch("/api/validate-server/" + serverAddress);
    if (res.status === 200) {
      //todo: set proper lifetime
      document.cookie = "activeServer=" + serverAddress + "; path=/";
      setShowNextAuth(true);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <div>
          {loading ? (
            <div className="w-6 h-6 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
          ) : (
            showNextAuth && <MastodonButton />
          )}
        </div>
      </div>
    </>
  );
}
