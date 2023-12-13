import { injectable } from "inversify";
import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import {
  MastojsClientFactory,
  transformMastojsStatus,
} from "../shared/mastojs";

@injectable()
export default class StatusPortMastojsAdapter implements StatusPort {
  async getStatus(id: string): Promise<Status> {
    const client = await MastojsClientFactory.getClient();

    const status = await client.v1.statuses.$select(id).fetch();

    if (status) {
      return transformMastojsStatus(status);
    }

    throw new Error("Status not found");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
