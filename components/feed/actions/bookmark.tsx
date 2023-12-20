import { actionTypesEnum } from "@/lib/data/core/entities/Actions";
import { ActionProps } from "./action-props";
import ActionWrapper from "./action-wrapper";

interface BookmarkActionProps extends ActionProps {
  active: boolean;
}

export default function Bookmark({
  objectId,
  fillColor,
  alreadyActed,
  iconClasses,
}: BookmarkActionProps) {
  return (
    <ActionWrapper
      objectId={objectId}
      alreadyActed={alreadyActed}
      fillColor={fillColor}
      actionType={actionTypesEnum.BOOKMARK}
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
    </ActionWrapper>
  );
}
