import { DirectMessagesListItem } from "../entities/DirectMessagesListItem";

export default interface DirectMessagesPort {
  getConversations(): Promise<DirectMessagesListItem[]>;
}
