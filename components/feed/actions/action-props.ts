import { actionTypesEnum } from "@/lib/data/core/entities/Actions";

export interface ActionProps {
  objectId: string;
  fillColor: string;
  alreadyActed?: boolean;
  children?: React.ReactNode;
  iconClasses?: string;
  actionType?: actionTypesEnum;
}
