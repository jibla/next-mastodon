import { actionTypesEnum } from "@/lib/data/core/entities/Actions";
import { ActionProps } from "./action-props";
import ActionWrapper from "./ActionWrapper";
import ShareIcon from "@/components/shared/shareIcon";

interface ShareActionProps extends ActionProps {
  count: number;
}

export default function Share({
  objectId,
  count,
  fillColor,
  iconClasses,
  alreadyActed,
}: ShareActionProps) {
  return (
    <>
      <ActionWrapper
        objectId={objectId}
        alreadyActed={alreadyActed}
        fillColor={fillColor}
        actionType={actionTypesEnum.REPOST}
      >
        <ShareIcon iconClasses={iconClasses} />
        <span className="ml-1 text-black">{count}</span>
      </ActionWrapper>
    </>
  );
}
