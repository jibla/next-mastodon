import { Status } from "../entities/Status";

export default interface StatusPort {
  getStatus(id: string): Promise<Status>;
  publishStatus(text: string): Promise<Status | null>;
  replyToMessage(id: string, message: string): Promise<Status | null>;
}
