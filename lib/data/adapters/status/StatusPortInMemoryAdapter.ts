import { Status } from "../../models/Status";
import IStatusPort from "../../ports/IStatusPort";

export default class StatusPortInMemoryAdapter implements IStatusPort {
  getStatus(id: string): Promise<Status> {
    throw new Error("Method not implemented.");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
