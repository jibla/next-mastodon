import { useState } from "react";
import { ActionProps } from "./action-props";
import useAction from "@/lib/hooks/useAction";
import { actionTypesEnum } from "@/lib/data/core/entities/Actions";

interface BookmarkActionProps extends ActionProps {
  active: boolean;
}

export default function Bookmark({
  objectId,
  active,
  fillColor,
}: BookmarkActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const iconClasses = `h-6 w-6 ${isFilled ? fillColor : "text-black"}`;

  const { performAction, loading, result } = useAction();

  return (
    <div
      onMouseEnter={() => setIsFilled(true)}
      onMouseLeave={() => setIsFilled(false)}
      className="action-icon flex items-center"
      onClick={(event) => {
        event.stopPropagation();
        performAction(actionTypesEnum.BOOKMARK, objectId);
      }}
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
