import { useEffect, useState } from "react";
import { DirectMessagesListItem } from "../data/core/entities/DirectMessagesListItem";
import { ListDirectMessagesUseCase } from "../data/core/use-cases/list-direct-messages/ListDirectMessagesUseCase";
import { container } from "../shared/ioc";

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
          .get<ListDirectMessagesUseCase>("list-direct-messages")
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
