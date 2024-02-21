import { useCallback, useState } from "react";
import {
  ReplyToStatusOutput,
  ReplyToStatusUseCase,
} from "../data/core/use-cases/reply-to-status/ReplyToStatusUseCase";
import { container } from "../shared/ioc";

const useReplyToStatus = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ReplyToStatusOutput | null>(null);

  const replyCallback = useCallback(async (id: string, message: string) => {
    setLoading(true);
    try {
      const res = await container
        .get<ReplyToStatusUseCase>("reply-to-status")
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
