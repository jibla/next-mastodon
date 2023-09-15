import { StatusProps } from "@/lib/types/StatusProps";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Card } from "../ui/card";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function Status({
  id,
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
}: StatusProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);

  return (
    <Link href={`/in/status/${id}`}>
      <Card
        role="status"
        key="1"
        className="w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <span className="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
          </div>
          <div className="p-8 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="mr-3">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                    {name}
                  </div>
                  <div className="text-gray-400 dark:text-gray-300">
                    {authorUrl}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-500 dark:text-gray-300">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />
            </div>
            <div className="flex mt-6 justify-between items-center">
              <div className="flex space-x-4 text-gray-400 dark:text-gray-300">
                <div className="flex items-center">
                  <svg
                    className=" h-6 w-6 text-black"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <span className="ml-1 text-black">566</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className=" h-6 w-6 text-black"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                  <span className="ml-1 text-black">241</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className=" h-6 w-6 text-black"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m17 2 4 4-4 4" />
                    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
                    <path d="m7 22-4-4 4-4" />
                    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
                  </svg>
                  <span className="ml-1 text-black">487</span>
                </div>
              </div>
              <div role="date" className="text-gray-400 dark:text-gray-300">
                {createdAt}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
