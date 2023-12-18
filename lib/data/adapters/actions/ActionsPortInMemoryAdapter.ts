import { injectable } from "inversify";
import ActionsPort from "../../core/ports/ActionsPort";

@injectable()
export class ActionsPortInMemoryAdapter implements ActionsPort {
  performAction(actionType: string, objectId: string): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
