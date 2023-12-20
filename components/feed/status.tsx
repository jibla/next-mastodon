import RelativeDate from "@/components/shared/relativeDate";
import { Status } from "@/lib/data/core/entities/Status";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DOMPurify from "dompurify";
import StatusImagesGrid from "../shared/StatusImagesGrid";
import { Avatar } from "../ui/avatar";
import Bookmark from "./actions/bookmark";
import Comment from "./actions/comment";
import CopyLink from "./actions/copylink";
import Like from "./actions/like";
import Share from "./actions/share";

export default function StatusComponent({ status }: { status: Status }) {
  const sanitizedHTMLText = DOMPurify.sanitize(status.text);

  return (
    <div role="status" key="1" className="m-2 border-b status-container">
      <div className="md:flex">
        <div className="p-8 w-full">
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
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300 justify-center w-full">
              <Like
                objectId={status.id}
                count={status.likesCount}
                fillColor="fill-red-500 text-red-500"
                alreadyActed={status.favourited}
              />
              <Comment
                objectId={status.id}
                count={status.commentsCount}
                fillColor="text-red-500"
              />
              <Share
                objectId={status.id}
                count={status.sharesCount}
                fillColor="text-red-500"
                alreadyActed={status.shared}
              />
              <Bookmark
                objectId={status.id}
                active={false}
                fillColor="text-blue-500 fill-blue-500"
                alreadyActed={status.bookmarked}
              />
              <CopyLink objectId={status.id} fillColor="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
