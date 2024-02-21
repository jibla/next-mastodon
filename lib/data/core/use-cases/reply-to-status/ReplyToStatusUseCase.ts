import { UseCase, UseCaseInput } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import { Status } from "../../entities/Status";
import type StatusPort from "../../ports/StatusPort";

export interface ReplyToStatusOutput {
  success: boolean;
  status?: Status;
  message?: string;
}

@injectable()
export class ReplyToStatusUseCase implements UseCase {
  private statusPort: StatusPort;

  constructor(@inject("status-port") statusPort: StatusPort) {
    this.statusPort = statusPort;
  }

  async execute(input: UseCaseInput): Promise<ReplyToStatusOutput> {
    let returnedStatus = await this.statusPort.replyToMessage(
      input.id,
      input.message,
    );

    if (returnedStatus) {
      return { success: true, status: returnedStatus };
    }

    //TODO: fix this as part of the global error handling fix
    return { success: false, message: "Failed to reply to status" };
  }
}
