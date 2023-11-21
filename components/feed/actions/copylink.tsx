import { useState } from "react";
import { ActionProps } from "./action-props";

interface CopyLinkProps extends ActionProps {}

export default function CopyLink({ fillColor }: CopyLinkProps) {
  const [isFilled, setIsFilled] = useState(false);
  const iconClasses = `h-6 w-6 ${isFilled ? fillColor : "text-black"}`;

  return (
    <div className="action-icon flex items-center">
      <button
        onMouseEnter={() => setIsFilled(true)}
        onMouseLeave={() => setIsFilled(false)}
        aria-label="Copy link"
        className="focus:outline-none"
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
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
    </div>
  );
}
