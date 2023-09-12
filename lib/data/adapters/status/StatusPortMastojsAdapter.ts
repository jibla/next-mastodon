import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import BaseMastojsAdapter from "../BaseMastojsAdapter";

export default class StatusPortMastojsAdapter
  extends BaseMastojsAdapter
  implements StatusPort
{
  getStatus(id: number): Promise<Status> {
    throw new Error("Method not implemented.");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
