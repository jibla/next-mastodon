import { injectable } from "inversify";
import ActionsPort from "../../core/ports/ActionsPort";

@injectable()
export class ActionsPortInMemoryAdapter implements ActionsPort {
  private static inMemoryDb: {
    [key: string]: { acted: boolean; actionType: string };
  } = {};

  performAction(actionType: string, objectId: string): Promise<boolean> {
    return new Promise((resolve) => {
      const key = `${objectId}-${actionType}`;

      if (ActionsPortInMemoryAdapter.inMemoryDb[key]) {
        ActionsPortInMemoryAdapter.inMemoryDb[key].acted =
          !ActionsPortInMemoryAdapter.inMemoryDb[key].acted;
      } else {
        ActionsPortInMemoryAdapter.inMemoryDb[key] = {
          acted: true,
          actionType: actionType,
        };
      }

      resolve(ActionsPortInMemoryAdapter.inMemoryDb[key].acted);
    });
  }
}
