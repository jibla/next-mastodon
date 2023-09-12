import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";

export default class StatusPortInMemoryAdapter implements StatusPort {
  getStatus(id: number): Promise<Status> {
    throw new Error("Method not implemented.");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
