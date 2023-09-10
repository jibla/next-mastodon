import { Status } from "../entities/Status";

export default interface StatusPort {
  getStatus(id: string): Promise<Status>;
  postStatus(status: Status): Promise<Status>;
}
