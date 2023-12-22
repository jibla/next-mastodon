import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import type StatusPort from "../../ports/StatusPort";
import { Status } from "../../entities/Status";
import { inject, injectable } from "inversify";

interface publisStatusInput {
  text: string;
}

interface publishStatusOutput {
  success: boolean;
  status?: Status;
  message?: string;
}

@injectable()
export class PublishStatusUseCase implements UseCase {
  private statusPort: StatusPort;
  constructor(@inject("status-port") statusPort: StatusPort) {
    this.statusPort = statusPort;
  }

  async execute(input: publisStatusInput): Promise<publishStatusOutput> {
    const status = await this.statusPort.publishStatus(input.text);
    if (status) {
      return { success: true, status };
    }

    //TODO: fix this as part of the global error handling fix
    return { success: false, message: "Failed to publish status" };
  }
}
