import { useState } from "react";
import { ActionProps } from "./action-props";

interface BookmarkActionProps extends ActionProps {
  active: boolean;
}

export default function Bookmark({ active, fillColor }: BookmarkActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const iconClasses = `h-6 w-6 ${isFilled ? fillColor : "text-black"}`;
  return (
    <div
      onMouseEnter={() => setIsFilled(true)}
      onMouseLeave={() => setIsFilled(false)}
      className="action-icon flex items-center"
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
        <path className="action-path" d="M5 3v18l7-5 7 5V3z" />
      </svg>
    </div>
  );
}
