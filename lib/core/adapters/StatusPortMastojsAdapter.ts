import { Status } from "../models/Status";
import IStatusPort from "../ports/IStatusPort";
import BaseMastojsAdapter from "./BaseMastojsAdapter";

export default class StatusPortMastojsAdapter
  extends BaseMastojsAdapter
  implements IStatusPort
{
  getStatus(id: string): Promise<Status> {
    throw new Error("Method not implemented.");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
