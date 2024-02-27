export default interface ActionPort {
  performAction(actionType: string, objectId: string): Promise<boolean>;
}
