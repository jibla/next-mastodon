"use client";

import SignInForm from "@/components/auth/SignInForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden">
        <div className="relative h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex overflow-auto">
          <div className="absolute inset-0 bg-zinc-900" />
          <Link href="https://github.com/Omedia/next-mastodon">
            <Button className="relative z-20 flex items-center text-lg font-medium bg-transparent hover:bg-white hover:text-black transition-colors duration-200 ease-in-out px-4 py-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </Button>
          </Link>
          <div className="relative z-20 mt-auto">
            <div className="space-y-2">
              <p className="text-lg">
                New mastodon client, built with Next.js & Vercel.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:p-8 overflow-auto">
          <SignInForm />
        </div>
      </div>
    </>
  );
}
