import { ScrollArea } from "@/components/ui/scroll-area";
import Status from "./status";
import { TimelineProps } from "@/lib/types/TImelineProps";

export default function Timeline({ statuses }: TimelineProps) {
  return (
    <div>
      {statuses.map((status, index) => (
        <Status
          key={index}
          name={status.name}
          avatar={status.avatar}
          authorUrl={status.authorUrl}
          createdAt={status.createdAt}
          text={status.text}
        />
      ))}
    </div>
  );
}
