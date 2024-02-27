import {
  UseCase,
  UseCaseInput,
  UseCaseOutput,
} from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { actionTypesEnum } from "../../entities/Actions";
import type ActionPort from "../../ports/ActionPort";

export interface ActionsUseCaseInput extends UseCaseInput {
  actionType: actionTypesEnum;
  objectId: string;
}

export interface ActionsUseCaseOutput extends UseCaseOutput {
  success: boolean;
  actionType: actionTypesEnum;
  acted: boolean;
  objectId: string;
}

@injectable()
export class ActionsUseCase implements UseCase {
  private actionsPort: ActionPort;
  constructor(@inject("action-port") actionsPort: ActionPort) {
    this.actionsPort = actionsPort;
  }
  async execute(input: ActionsUseCaseInput): Promise<ActionsUseCaseOutput> {
    const result = await this.actionsPort.performAction(
      input.actionType,
      input.objectId,
    );

    return {
      success: result,
      acted: result,
      actionType: input.actionType,
      objectId: input.objectId,
    };
  }
}
