import { Status } from "../models/Status";

export default interface IStatusPort {
  getStatus(id: string): Promise<Status>;
  postStatus(status: Status): Promise<Status>;
}
