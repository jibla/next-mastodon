import { cn } from "../utils";
import RelativeDate from "../shared/relativeDate";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcnui/avatar";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";

interface ConversationsListItemProps {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
  lastMessageId: string;
  isRead: boolean;
  avatarUrl?: string;
}

export default function ConversationsListItem({
  id,
  name,
  lastMessage,
  lastMessageId,
  lastMessageDate,
  isRead,
  avatarUrl,
}: ConversationsListItemProps) {
  const sanitizedLastMessage = DOMPurify.sanitize(lastMessage);
  const router = useRouter();

  return (
    <button
      role="direct-message-list-item"
      className={cn(
        "flex items-center gap-3 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
      )}
      onClick={() => router.push(`/in/dm/${lastMessageId}`)}
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
