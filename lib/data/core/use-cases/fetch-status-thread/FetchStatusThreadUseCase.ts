import { UseCase, UseCaseInput } from "@/lib/shared/use-cases/UseCaseInterface";
import { inject, injectable } from "inversify";
import type StatusPort from "../../ports/StatusPort";
import { Feed } from "../../entities/Feed";

@injectable()
export class FetchStatusThreadUseCase implements UseCase {
  private statusPort: StatusPort;
  constructor(@inject("status-port") statusPort: StatusPort) {
    this.statusPort = statusPort;
  }

  async execute(input: UseCaseInput): Promise<Feed> {
    return await this.statusPort.getStatusThread(input.id);
  }
}
