import { injectable } from "inversify";
import ActionsPort from "../../core/ports/ActionsPort";
import { MastojsClientFactory } from "../shared/mastojs";

@injectable()
export class ActionsPortMastojsAdapter implements ActionsPort {
  async performAction(actionType: string, objectId: string): Promise<boolean> {
    const client = await MastojsClientFactory.getClient();

    const statusProxy = client.v1.statuses.$select(objectId);
    const status = await statusProxy.fetch();

    let actionToRun = null;
    let propertyToCheck = null;

    switch (actionType) {
      case "like":
        actionToRun = status.favourited
          ? statusProxy.unfavourite
          : statusProxy.favourite;
        propertyToCheck = "favourited";
        break;
      case "share":
        actionToRun = status.reblogged
          ? statusProxy.unreblog
          : statusProxy.reblog;
        propertyToCheck = "reblogged";
        break;
      case "bookmark":
        actionToRun = status.bookmarked
          ? statusProxy.unbookmark
          : statusProxy.bookmark;
        propertyToCheck = "bookmarked";
        break;
      default:
        break;
    }

    console.log(actionType, actionToRun, propertyToCheck);

    if (actionToRun && propertyToCheck) {
      const updatedStatus = await actionToRun();
      return updatedStatus[
        propertyToCheck as keyof typeof updatedStatus
      ] as boolean;
    }

    return false;
  }
}
