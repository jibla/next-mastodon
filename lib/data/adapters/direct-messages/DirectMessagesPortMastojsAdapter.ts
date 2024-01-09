import { injectable } from "inversify";
import { DirectMessagesListItem } from "../../core/entities/DirectMessagesListItem";
import DirectMessagesPort from "../../core/ports/DirectMessagesPort";
import { MastojsClientFactory } from "../shared/mastojs";

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
          avatar: conversation.accounts[0].avatarStatic || "",
          isRead: conversation.unread,
        };
      });
    }

    return [];
  }
}
