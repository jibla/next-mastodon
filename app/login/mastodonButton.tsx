import { signIn } from "next-auth/react";

export default function MastodonButton() {
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        onClick={() => signIn("mastodon")}
      >
        Sign in
      </button>
    </>
  );
}
