import { UseCase, UseCaseInput } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { Status } from "../../entities/Status";
import type DmPort from "../../ports/DmPort";

export interface ConversationOutput {
  success: boolean;
  conversation: Status[];
}

@injectable()
export class ReadConversationUseCase implements UseCase {
  private port: DmPort;
  constructor(@inject("dm-port") statusPort: DmPort) {
    this.port = statusPort;
  }

  async execute(input: UseCaseInput): Promise<ConversationOutput> {
    const conversation = await this.port.getConversationMessagesByLastMessage(
      input.id,
    );

    //TODO: error handling properly
    return {
      success: true,
      conversation: conversation,
    };
  }
}
