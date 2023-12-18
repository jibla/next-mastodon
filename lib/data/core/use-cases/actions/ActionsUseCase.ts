import {
  UseCase,
  UseCaseInput,
  UseCaseOutput,
} from "@/lib/shared/use-cases/UseCaseInterface";

enum actionTypesEnum {
  REACT = "react",
  REPOST = "repost",
  BOOKMARK = "bookmark",
}

interface ActionsUseCaseInput extends UseCaseInput {
  actionType: actionTypesEnum;
  objectId: string;
}

interface ActionsUseCaseOutput extends UseCaseOutput {
  success: boolean;
  actionType: actionTypesEnum;
  objectId: string;
}

export class ActionsUseCase implements UseCase {
  execute(input: ActionsUseCaseInput): ActionsUseCaseOutput {
    throw new Error("Method not implemented.");
  }
}
