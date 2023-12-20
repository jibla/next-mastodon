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
  actionType,
}: ActionProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [isActed, setIsActed] = useState(alreadyActed ? true : false);
  const iconClasses = `${
    isFilled || isActed ? "filled " + fillColor : "text-black"
  }`;

  const { performAction, loading, result } = useAction();
  useEffect(() => {
    if (result) {
      setIsActed(result.acted);
    }
  }, [children, iconClasses, result]);

  const mappedChildren = React.Children.map(children, (child) => {
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
        performAction(actionType ?? actionTypesEnum.REACT, objectId);
      }}
    >
      <button
        aria-label={actionType}
        className={"action-icon flex items-center " + iconClasses}
      >
        {mappedChildren}
      </button>
    </div>
  );
}
