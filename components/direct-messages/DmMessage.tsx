import RelativeDate from "@/components/shared/relativeDate";
import { Status } from "@/lib/data/core/entities/Status";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DOMPurify from "dompurify";
import StatusImagesGrid from "../shared/StatusImagesGrid";
import { Avatar } from "../ui/avatar";

interface DmMessageProps {
  status: Status;
  align: "left" | "right";
}

export default function DmMessage({ status, align }: DmMessageProps) {
  const sanitizedHTMLText = DOMPurify.sanitize(status.text);

  const alignClass = align === "left" ? "items-start" : "items-end";
  const textColorClass = align === "left" ? "text-gray-900" : "text-white";
  const bgColorClass = align === "right" ? "bg-gray-900" : "bg-gray-200";

  return (
    <div className={"flex flex-col " + alignClass}>
      <div className="flex items-center space-x-2">
        <div className={"text-sm text-gray-900"}>
          {status.name} • <RelativeDate date={status.createdAt} />
        </div>
      </div>
      <div className={"p-2 rounded-lg " + bgColorClass + " " + textColorClass}>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />
        {status.images && status.images.length > 0 && (
          <StatusImagesGrid statusId={status.id} images={status.images} />
        )}
      </div>
    </div>
  );
}
