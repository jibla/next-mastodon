import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { DirectMessagesListItem } from "../../entities/DirectMessagesListItem";
import type DmPort from "../../ports/DmPort";

export interface ListDirectMessagesOutput {
  success: boolean;
  list: DirectMessagesListItem[];
  message?: string;
}

@injectable()
export class ListConversationsUseCase implements UseCase {
  private port: DmPort;
  constructor(@inject("dm-port") statusPort: DmPort) {
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
