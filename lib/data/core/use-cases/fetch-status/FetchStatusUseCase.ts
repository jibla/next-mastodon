import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import type StatusPort from "../../ports/StatusPort";
import { Status } from "../../entities/Status";
import { inject, injectable } from "inversify";

interface fetchStatusInput {
  id: string;
}

interface fetchStatusOutput {
  status: Status;
}

@injectable()
export class FetchStatusUseCase implements UseCase {
  private statusPort: StatusPort;
  constructor(@inject("status-port") statusPort: StatusPort) {
    this.statusPort = statusPort;
  }

  async execute(input: fetchStatusInput): Promise<fetchStatusOutput> {
    const status = await this.statusPort.getStatus(input.id);
    return { status };
  }
}
