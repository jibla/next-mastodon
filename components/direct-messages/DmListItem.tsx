import { cn } from "@/lib/utils";
import RelativeDate from "../shared/relativeDate";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DOMPurify from "dompurify";

interface DMListItemProps {
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  isRead: boolean;
  avatarUrl?: string;
}

export default function DMListItem({
  name,
  lastMessage,
  lastMessageDate,
  isRead,
  avatarUrl,
}: DMListItemProps) {
  const sanitizedLastMessage = DOMPurify.sanitize(lastMessage);

  return (
    <button
      role="direct-message-list-item"
      className={cn(
        "flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
      )}
    >
      <div className="flex-none">
        <Avatar className="mr-3">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>NM</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow">
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center">
            <div className="font-semibold">{name}</div>
            {isRead && (
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            )}
            <div className={cn("ml-auto text-xs", "text-foreground")}>
              <RelativeDate date={lastMessageDate} />
            </div>
          </div>
        </div>
        <div className="line-clamp-2 text-xs text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: sanitizedLastMessage }} />
        </div>
      </div>
    </button>
  );
}
