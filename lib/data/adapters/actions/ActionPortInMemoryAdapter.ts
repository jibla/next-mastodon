import { injectable } from "inversify";
import ActionPort from "../../core/ports/ActionPort";

@injectable()
export class ActionPortInMemoryAdapter implements ActionPort {
  private static inMemoryDb: {
    [key: string]: { acted: boolean; actionType: string };
  } = {};

  performAction(actionType: string, objectId: string): Promise<boolean> {
    return new Promise((resolve) => {
      const key = `${objectId}-${actionType}`;

      if (ActionPortInMemoryAdapter.inMemoryDb[key]) {
        ActionPortInMemoryAdapter.inMemoryDb[key].acted =
          !ActionPortInMemoryAdapter.inMemoryDb[key].acted;
      } else {
        ActionPortInMemoryAdapter.inMemoryDb[key] = {
          acted: true,
          actionType: actionType,
        };
      }

      resolve(ActionPortInMemoryAdapter.inMemoryDb[key].acted);
    });
  }
}
