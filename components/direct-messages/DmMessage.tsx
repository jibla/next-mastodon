import RelativeDate from "@/components/shared/relativeDate";
import { Status } from "@/lib/data/core/entities/Status";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DOMPurify from "dompurify";
import Bookmark from "../feed/actions/Bookmark";
import Like from "../feed/actions/Like";
import StatusImagesGrid from "../shared/StatusImagesGrid";
import { Avatar } from "../ui/avatar";

export default function DmMessage({ status }: { status: Status }) {
  const sanitizedHTMLText = DOMPurify.sanitize(status.text);

  return (
    <div role="status" key="1" className="m-2 border-b status-container">
      <div className="md:flex">
        <div className="py-4 w-full">
          <div className="flex justify-between w-full">
            <div className="flex">
              <Avatar className="mr-3">
                <AvatarImage src={status.avatar} alt={status.name} />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
              <div>
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {status.name}
                </div>
                <div className="text-gray-400 dark:text-gray-300">
                  <a href={status.authorUrl}>{status.authorUrl}</a>
                </div>
              </div>
            </div>
            <div role="date" className="text-gray-400 dark:text-gray-300">
              <RelativeDate date={status.createdAt} />
            </div>
          </div>

          <div className="status-content mt-4 text-black dark:text-gray-300">
            <div className="text-content">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />
            </div>

            {status.images && status.images.length > 0 && (
              <StatusImagesGrid statusId={status.id} images={status.images} />
            )}
          </div>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300 justify-left w-full">
              <Like
                objectId={status.id}
                count={status.likesCount}
                fillColor="fill-red-500 text-red-500"
                alreadyActed={status.favourited}
              />
              <Bookmark
                objectId={status.id}
                active={false}
                fillColor="text-blue-500 fill-blue-500"
                alreadyActed={status.bookmarked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
