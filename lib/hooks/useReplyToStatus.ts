import { useCallback, useState } from "react";
import {
  ReplyToDmOutput,
  ReplyToDmUseCase,
} from "../data/core/use-cases/reply-to-dm/ReplyToDmUseCase";
import { container } from "../shared/ioc";

const useReplyToStatus = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReplyToDmOutput | null>(null);

  const replyCallback = useCallback(async (id: string, message: string) => {
    setLoading(true);
    try {
      const res = await container
        .get<ReplyToDmUseCase>("reply-to-dm")
        .execute({ id, message });

      setResult(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setResult(null);
      setLoading(false);
    }
  }, []);

  return { replyCallback, loading, result };
};

export default useReplyToStatus;
