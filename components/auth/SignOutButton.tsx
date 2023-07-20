import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <>
      <button
        className="text-gray-200 bg-red-500 px-4 py-2 rounded hover:bg-red-700"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
}
