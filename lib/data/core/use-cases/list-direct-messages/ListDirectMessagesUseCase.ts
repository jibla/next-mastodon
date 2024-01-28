import {
  UseCase,
  UseCaseOutput,
} from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { DirectMessagesListItem } from "../../entities/DirectMessagesListItem";
import type DirectMessagesPort from "../../ports/DirectMessagesPort";

export interface ListDirectMessagesOutput {
  success: boolean;
  list: DirectMessagesListItem[];
  message?: string;
}

@injectable()
export class ListDirectMessagesUseCase implements UseCase {
  private port: DirectMessagesPort;
  constructor(@inject("direct-messages-port") statusPort: DirectMessagesPort) {
    this.port = statusPort;
  }

  async execute(): Promise<ListDirectMessagesOutput> {
    const list = await this.port.getConversations();
    return {
      success: true,
      list: list,
    };
  }
}
