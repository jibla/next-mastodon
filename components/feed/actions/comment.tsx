import { useState } from "react";
import { ActionProps } from "./action-props";

interface CommentActionProps extends ActionProps {
  count: number;
}

export default function Comment({ count, fillColor }: CommentActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const iconClasses = `h-6 w-6 ${isFilled ? fillColor : "text-black"}`;

  return (
    <>
      <div
        onMouseEnter={() => setIsFilled(true)}
        onMouseLeave={() => setIsFilled(false)}
        className="flex items-center"
      >
        <svg
          className={iconClasses}
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
          <path
            className="action-path"
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
          />
        </svg>
        <span className="ml-1 text-black">{count}</span>
      </div>
    </>
  );
}
