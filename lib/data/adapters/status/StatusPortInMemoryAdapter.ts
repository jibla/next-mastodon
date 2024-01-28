import { injectable } from "inversify";
import { Status } from "../../core/entities/Status";
import StatusPort from "../../core/ports/StatusPort";
import { generateSingleStatus } from "../feed/in-memory/data-generator";

const serverParams = {
  max_toot_chars: 500,
};

@injectable()
export default class StatusPortInMemoryAdapter implements StatusPort {
  getStatus(id: string): Promise<Status> {
    const status = generateSingleStatus();
    return Promise.resolve(status);
  }
  publishStatus(text: string): Promise<Status | null> {
    if (!text || text.length === 0) throw new Error("Status cannot be empty");

    if (text.length <= serverParams.max_toot_chars) {
      const status: Status = {
        id: "110463308476950678",
        name: "Giorgi",
        avatar: "avatar1.png",
        authorUrl: "https://mastodon.social/@Giorgi",
        createdAt: new Date().toISOString(),
        text: text,
        sharesCount: 0,
        commentsCount: 0,
        likesCount: 0,
        favourited: false,
        bookmarked: false,
        shared: false,
      };
      return Promise.resolve(status);
    } else {
      throw new Error("Status too long");
    }
  }

  replyToMessage(id: string, message: string): Promise<Status | null> {
    throw new Error("Method not implemented.");
  }
}
