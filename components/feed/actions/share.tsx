import { useState } from "react";
import { ActionProps } from "./action-props";
import useAction from "@/lib/hooks/useAction";
import { actionTypesEnum } from "@/lib/data/core/entities/Actions";

interface ShareActionProps extends ActionProps {
  count: number;
}

export default function Share({
  objectId,
  count,
  fillColor,
}: ShareActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const iconClasses = `h-6 w-6 ${isFilled ? fillColor : "text-black"}`;

  const { performAction, loading, result } = useAction();

  return (
    <>
      <div
        onMouseEnter={() => setIsFilled(true)}
        onMouseLeave={() => setIsFilled(false)}
        className="flex items-center"
        onClick={(event) => {
          event.stopPropagation();
          performAction(actionTypesEnum.REPOST, objectId);
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
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
        <span className="ml-1 text-black">{count}</span>
      </div>
    </>
  );
}
