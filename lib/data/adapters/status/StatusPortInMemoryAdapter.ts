import { injectable } from "inversify";
import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import { generateSingleStatus } from "../feed/in-memory/data-generator";

@injectable()
export default class StatusPortInMemoryAdapter implements StatusPort {
  getStatus(id: string): Promise<Status> {
    const status = generateSingleStatus();
    return Promise.resolve(status);
  }
  publishStatus(text: String): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
