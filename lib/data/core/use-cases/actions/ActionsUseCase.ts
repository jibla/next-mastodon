import {
  UseCase,
  UseCaseInput,
  UseCaseOutput,
} from "@/lib/shared/use-cases/UseCaseInterface";
import { injectable } from "inversify";
import { actionTypesEnum } from "../../entities/Actions";

interface ActionsUseCaseInput extends UseCaseInput {
  actionType: actionTypesEnum;
  objectId: string;
}

interface ActionsUseCaseOutput extends UseCaseOutput {
  success: boolean;
  actionType: actionTypesEnum;
  objectId: string;
}

@injectable()
export class ActionsUseCase implements UseCase {
  execute(input: ActionsUseCaseInput): ActionsUseCaseOutput {
    throw new Error("Method not implemented.");
  }
}
