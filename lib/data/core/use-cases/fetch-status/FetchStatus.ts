import { UseCase } from "@/lib/shared/use-cases/UseCaseInterface";
import StatusPort from "../../ports/StatusPort";
import { Status } from "../../entities/Status";

interface fetchStatusInput {
  id: number;
}

interface fetchStatusOutput {
  status: Status;
}

export class FetchStatus implements UseCase {
  constructor(private readonly statusPort: StatusPort) {}

  async execute(input: fetchStatusInput): Promise<fetchStatusOutput> {
    const status = await this.statusPort.getStatus(input.id);
    return { status };
  }
}
