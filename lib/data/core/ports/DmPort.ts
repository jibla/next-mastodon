import { DirectMessagesListItem } from "../entities/DirectMessagesListItem";
import { Status } from "../entities/Status";

export default interface DmPort {
  getConversations(): Promise<DirectMessagesListItem[]>;
  getConversationMessagesByLastMessage(id: string): Promise<Status[]>;
}
