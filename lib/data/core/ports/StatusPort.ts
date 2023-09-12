import { Status } from "../entities/Status";

export default interface StatusPort {
  getStatus(id: number): Promise<Status>;
  postStatus(status: Status): Promise<Status>;
}
