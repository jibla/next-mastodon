import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import BaseMastojsAdapter from "../BaseMastojsAdapter";

export default class StatusPortMastojsAdapter
  extends BaseMastojsAdapter
  implements StatusPort
{
  async getStatus(id: string): Promise<Status> {
    const status = await this.client?.v1.statuses.$select(id).fetch();

    if (status) {
      return {
        id: id,
        name: status?.account?.displayName,
        avatar: status?.account?.avatar,
        text: status?.content,
        authorUrl: status?.account?.url,
        createdAt: status?.createdAt,
      };
    }

    throw new Error("Status not found");
  }
  postStatus(status: Status): Promise<Status> {
    throw new Error("Method not implemented.");
  }
}
