import React, { ReactElement, cloneElement, useEffect, useState } from "react";
import { ActionProps } from "./action-props";
import useAction from "@/lib/hooks/useAction";
import { actionTypesEnum } from "@/lib/data/core/entities/Actions";

type ChildWithIconClasses = ReactElement & { className?: string };

export default function ActionWrapper({
  objectId,
  alreadyActed,
  fillColor,
  children,
}: ActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isActed, setIsActed] = useState(alreadyActed ? true : false);
  const [childrenWithClasses, setChildrenWithClasses] = useState(children);
  const iconClasses = `${isFilled || isActed ? fillColor : "text-black"}`;

  const { performAction, loading, result } = useAction();
  useEffect(() => {
    if (result) {
      setIsActed(true);
    }
  }, [children, childrenWithClasses, iconClasses, result]);

  const mappedChildren = React.Children.map(childrenWithClasses, (child) => {
    if (
      React.isValidElement(child) &&
      child.type === "svg" &&
      !child.props.className
    ) {
      return React.cloneElement(child as ChildWithIconClasses, {
        className: iconClasses,
      });
    }
    return child;
  });

  return (
    <div
      onMouseEnter={() => setIsFilled(true)}
      onMouseLeave={() => setIsFilled(false)}
      onClick={(event) => {
        event.stopPropagation();
        performAction(actionTypesEnum.REACT, objectId);
      }}
    >
      <div className={"action-icon flex items-center"}>{mappedChildren}</div>
    </div>
  );
}
