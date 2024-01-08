import { injectable } from "inversify";
import { DirectMessagesListItem } from "../../core/entities/DirectMessagesListItem";
import DirectMessagesPort from "../../core/ports/DirectMessagesPort";

@injectable()
export default class DirectMessagesPortInMemoryAdapter
  implements DirectMessagesPort
{
  getConversations(): Promise<DirectMessagesListItem[]> {
    const avatars: string[] = [
      "https://mastodon-files-omedia.fra1.digitaloceanspaces.com/mastodon-files-omedia/cache/accounts/avatars/111/646/227/082/703/455/original/1ff7bd0b68f4d0e4.png",
      "https://mastodon-files-omedia.fra1.digitaloceanspaces.com/mastodon-files-omedia/cache/accounts/avatars/111/447/620/957/690/617/original/d6e9b4e585527032.gif",
      "https://mastodon-files-omedia.fra1.digitaloceanspaces.com/mastodon-files-omedia/cache/accounts/avatars/111/704/676/779/765/030/original/2b4c57f8c0a724c1.jpeg",
    ];

    const conversations: DirectMessagesListItem[] = [
      {
        senderUserId: "user1",
        name: "John Doe",
        lastMessage: "Hello",
        lastMessageDate: "2022-01-01",
        avatar: "avatar1.png",
        isRead: true,
      },
      {
        senderUserId: "user2",
        name: "Jane Smith",
        lastMessage: "Hi",
        lastMessageDate: "2022-01-02",
        avatar: "avatar2.png",
        isRead: false,
      },
      {
        senderUserId: "user3",
        name: "Alice Johnson",
        lastMessage: "Hey",
        lastMessageDate: "2022-01-03",
        avatar: "avatar3.png",
        isRead: true,
      },
      {
        senderUserId: "user4",
        name: "Bob Anderson",
        lastMessage: "What's up?",
        lastMessageDate: "2022-01-04",
        avatar: "avatar4.png",
        isRead: false,
      },
      {
        senderUserId: "user5",
        name: "Emily Davis",
        lastMessage: "Good morning",
        lastMessageDate: "2022-01-05",
        avatar: "avatar5.png",
        isRead: true,
      },
      {
        senderUserId: "user6",
        name: "Michael Wilson",
        lastMessage: "How are you?",
        lastMessageDate: "2022-01-06",
        avatar: "avatar6.png",
        isRead: false,
      },
      {
        senderUserId: "user7",
        name: "Olivia Martinez",
        lastMessage: "Nice to meet you",
        lastMessageDate: "2022-01-07",
        avatar: "avatar7.png",
        isRead: true,
      },
      {
        senderUserId: "user8",
        name: "James Taylor",
        lastMessage: "See you later",
        lastMessageDate: "2022-01-08",
        avatar: "avatar8.png",
        isRead: false,
      },
      {
        senderUserId: "user9",
        name: "Sophia Clark",
        lastMessage: "Have a great day",
        lastMessageDate: "2022-01-09",
        avatar: "avatar9.png",
        isRead: true,
      },
      {
        senderUserId: "user10",
        name: "Daniel Lewis",
        lastMessage: "Take care",
        lastMessageDate: "2022-01-10",
        avatar: "avatar10.png",
        isRead: false,
      },
    ];

    conversations.forEach((conversation) => {
      const randomIndex = Math.floor(Math.random() * avatars.length);
      conversation.avatar = avatars[randomIndex];
    });

    return Promise.resolve(conversations);
  }
}
