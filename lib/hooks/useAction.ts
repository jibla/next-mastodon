import { useState, useCallback } from "react";
import { container } from "../shared/ioc";
import { actionTypesEnum } from "../data/core/entities/Actions";
import {
  ActionsUseCase,
  ActionsUseCaseOutput,
} from "../data/core/use-cases/actions/ActionsUseCase";

const useAction = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ActionsUseCaseOutput | null>(null);

  const performAction = useCallback(
    async (actionType: actionTypesEnum, objectId: string) => {
      setLoading(true);
      try {
        const res = await container.get<ActionsUseCase>("actions").execute({
          actionType,
          objectId,
        });

        setResult(res);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setResult(null);
        setLoading(false);
      }
    },
    [],
  );

  return { performAction, loading, result };
};

export default useAction;
