import { injectable } from "inversify";
import { DirectMessagesListItem } from "../../core/entities/DirectMessagesListItem";
import { Status } from "../../core/entities/Status";
import DmPort from "../../core/ports/DmPort";
import {
  MastojsClientFactory,
  transformMastojsStatus,
} from "../shared/mastojs";

@injectable()
export class DmPortMastojsAdapter implements DmPort {
  async getConversations(): Promise<DirectMessagesListItem[]> {
    const client = await MastojsClientFactory.getClient();
    const conversations = await client.v1.conversations.list();
    if (conversations.length > 0) {
      return conversations.map((conversation) => {
        const name =
          conversation.accounts[0].displayName ||
          conversation.accounts[0].username ||
          conversation.accounts[0].acct ||
          "";

        return {
          id: conversation.id,
          senderUserId: conversation.accounts[0].id,
          name: name,
          lastMessage: conversation.lastStatus?.content || "",
          lastMessageDate: conversation.lastStatus?.createdAt || "",
          lastMessageId: conversation.lastStatus?.id || "",
          avatar: conversation.accounts[0].avatarStatic || "",
          isRead: conversation.unread,
        };
      });
    }

    return [];
  }

  async getConversationMessagesByLastMessage(id: string): Promise<Status[]> {
    const client = await MastojsClientFactory.getClient();
    const lastMessageFromMasto = await client.v1.statuses.$select(id).fetch();
    if (lastMessageFromMasto) {
      let lastMessage = transformMastojsStatus(lastMessageFromMasto);

      const messages = await client.v1.statuses.$select(id).context.fetch();
      if (messages.ancestors.length > 0) {
        const statuses: Status[] = messages.ancestors.map((message) => {
          return transformMastojsStatus(message);
        });

        statuses.push(lastMessage);

        return statuses;
      }
    }

    return [];
  }

  async replyToMessage(id: string, message: string): Promise<void> {
    const client = await MastojsClientFactory.getClient();
    await client.v1.statuses.create({
      status: message,
      inReplyToId: id,
      visibility: "direct",
    });
  }
}
