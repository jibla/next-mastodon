import { UseCase, UseCaseInput } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { Status } from "../../entities/Status";
import type DirectMessagesPort from "../../ports/DirectMessagesPort";

export interface ConversationOutput {
  success: boolean;
  conversation: Status[];
}

@injectable()
export class ReadConversationUseCase implements UseCase {
  private port: DirectMessagesPort;
  constructor(@inject("direct-messages-port") statusPort: DirectMessagesPort) {
    this.port = statusPort;
  }

  async execute(input: UseCaseInput): Promise<ConversationOutput> {
    const conversation = await this.port.getConversationMessages(input.id);
    //TODO: error handling properly
    return {
      success: true,
      conversation: conversation,
    };
  }
}
