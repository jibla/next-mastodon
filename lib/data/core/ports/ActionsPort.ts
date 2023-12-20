export default interface ActionsPort {
  performAction(actionType: string, objectId: string): Promise<boolean>;
}
