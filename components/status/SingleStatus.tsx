import { Status } from "@/lib/data/core/entities/Status";
import StatusComponent from "./Status";

export default function SingleStatus(status: Status) {
  return (
    <>
      <StatusComponent status={status} />
    </>
  );
}
