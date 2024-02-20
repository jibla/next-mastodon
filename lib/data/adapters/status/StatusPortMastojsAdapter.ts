import { injectable } from "inversify";
import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import {
  MastojsClientFactory,
  transformMastojsStatus,
} from "../shared/mastojs";
import { Feed } from "../../core/entities/Feed";

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

  async publishStatus(text: string): Promise<Status | null> {
    const client = await MastojsClientFactory.getClient();

    const returnedStatus = await client.v1.statuses.create({ status: text });

    if (returnedStatus) {
      return transformMastojsStatus(returnedStatus);
    }

    return null;
  }

  async replyToMessage(id: string, message: string): Promise<Status | null> {
    const client = await MastojsClientFactory.getClient();

    const returnedStatus = await client.v1.statuses.create({
      status: message,
      visibility: "direct",
      inReplyToId: id,
    });

    if (returnedStatus) {
      return transformMastojsStatus(returnedStatus);
    }

    return null;
  }

  async getStatusThread(id: string): Promise<Feed> {
    const client = await MastojsClientFactory.getClient();

    const thread = await client.v1.statuses.$select(id).context.fetch();

    if (thread) {
      return {
        statuses: thread.descendants
          .reverse()
          .map(transformMastojsStatus)
          .reverse(),
      };
    }

    throw new Error("Status not found");
  }
}
