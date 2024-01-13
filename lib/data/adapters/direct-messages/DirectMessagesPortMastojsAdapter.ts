import { injectable } from "inversify";
import { DirectMessagesListItem } from "../../core/entities/DirectMessagesListItem";
import DirectMessagesPort from "../../core/ports/DirectMessagesPort";
import {
  MastojsClientFactory,
  transformMastojsStatus,
} from "../shared/mastojs";
import { Status } from "../../core/entities/Status";

@injectable()
export class DirectMessagesPortMastojsAdapter implements DirectMessagesPort {
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
    const messages = await client.v1.statuses.$select(id).context.fetch();
    if (messages.ancestors.length > 0) {
      const statuses: Status[] = messages.ancestors.map((message) => {
        return transformMastojsStatus(message);
      });

      return statuses;
    }

    return [];
  }
}
