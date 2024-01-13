import { DirectMessagesListItem } from "../entities/DirectMessagesListItem";
import { Status } from "../entities/Status";

export default interface DirectMessagesPort {
  getConversations(): Promise<DirectMessagesListItem[]>;
  getConversationMessagesByLastMessage(id: string): Promise<Status[]>;
}
