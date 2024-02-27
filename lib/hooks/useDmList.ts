import { useEffect, useState } from "react";
import { DirectMessagesListItem } from "../data/core/entities/DirectMessagesListItem";
import { container } from "../shared/ioc";
import { ListConversationsUseCase } from "../data/core/use-cases/list-conversations/ListConversationsUseCase";

export default function useDmList(): {
  dmList: DirectMessagesListItem[] | [];
  loading: boolean;
} {
  const [dmList, setDmList] = useState<DirectMessagesListItem[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDmList() {
      try {
        const messagesList = await container
          .get<ListConversationsUseCase>("list-conversations")
          .execute();

        if (messagesList.success) {
          setLoading(false);
          setDmList(messagesList.list);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the direct messages list:",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    getDmList();
  }, []);

  return { loading, dmList };
}
