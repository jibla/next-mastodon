import { injectable } from "inversify";
import ActionsPort from "../../core/ports/ActionsPort";

@injectable()
export class ActionsPortMastojsAdapter implements ActionsPort {
  performAction(actionType: string, objectId: string): Promise<boolean> {
    console.log("performAction", actionType, objectId);
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
