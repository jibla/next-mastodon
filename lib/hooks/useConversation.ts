import { useEffect, useState } from "react";
import { Status } from "../data/core/entities/Status";
import { container } from "../shared/ioc";
import { UseCase } from "../shared/use-cases/UseCaseInterface";

export default function useConversatrion(id: string): {
  conversation: Status[] | [];
  loading: boolean;
} {
  const [conversation, setConversation] = useState<Status[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getConversation() {
      try {
        const conversation = await container
          .get<UseCase>("read-conversation")
          .execute({ id: id });

        if (conversation.success) {
          setLoading(false);
          setConversation(conversation.conversation);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the conversation.",
          error,
        );
      } finally {
        setLoading(false);
      }
    }

    getConversation();
  }, [id]);

  return { loading, conversation };
}
