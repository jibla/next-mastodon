import { useCallback, useState } from "react";
import {
  PublishStatusOutput,
  PublishStatusUseCase,
} from "../data/core/use-cases/publish-status/PublishStatusUseCase";
import { container } from "../shared/ioc";

const usePublishStatus = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PublishStatusOutput | null>(null);

  const publishCallback = useCallback(async (text: string) => {
    setLoading(true);
    try {
      const res = await container
        .get<PublishStatusUseCase>("publish-status")
        .execute({ text });

      setResult(res);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setResult(null);
      setLoading(false);
    }
  }, []);

  return { publishCallback, loading, result };
};

export default usePublishStatus;
