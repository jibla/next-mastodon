import RelativeDate from "@/components/shared/relativeDate";
import { Status } from "@/lib/data/core/entities/Status";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import DOMPurify from "dompurify";
import StatusImagesGrid from "../shared/StatusImagesGrid";
import { Avatar } from "../shadcnui/avatar";
import Bookmark from "./actions/Bookmark";
import Comment from "./actions/Comment";
import CopyLink from "./actions/CopyLink";
import Like from "./actions/Like";
import Share from "./actions/Share";
import ShareIcon from "../shared/shareIcon";

export default function Status({ status }: { status: Status }) {
  let statusToRender = status;
  if (status.reblogged) {
    statusToRender = status.reblogged;
  }

  const sanitizedHTMLText = DOMPurify.sanitize(statusToRender.text);

  return (
    <div role="status" key="1" className="m-2 border-b status-container">
      {status.reblogged && (
        <div className="flex items-center">
          <span className="mr-2">
            {" reblogged by "}
            <a
              href={status.authorUrl}
              className="text-blue-500 hover:underline"
            >
              {status.name}
            </a>
          </span>

          <ShareIcon iconClasses="" />
        </div>
      )}
      <div className="md:flex">
        <div className="py-4 w-full">
          <div className="flex justify-between w-full">
            <div className="flex">
              <Avatar className="mr-3">
                <AvatarImage
                  src={statusToRender.avatar}
                  alt={statusToRender.name}
                />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
              <div>
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {statusToRender.name}
                </div>
                <div className="text-gray-400 dark:text-gray-300">
                  <a href={statusToRender.authorUrl}>
                    {statusToRender.authorUrl}
                  </a>
                </div>
              </div>
            </div>
            <div role="date" className="text-gray-400 dark:text-gray-300">
              <RelativeDate date={statusToRender.createdAt} />
            </div>
          </div>

          <div className="status-content mt-4 text-black dark:text-gray-300">
            <div className="text-content">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />
            </div>

            <div className={statusToRender.sensitive ? "blurred-image" : ""}>
              {statusToRender.images && statusToRender.images.length > 0 && (
                <StatusImagesGrid
                  statusId={statusToRender.id}
                  images={statusToRender.images}
                />
              )}
            </div>
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
                alreadyActed={statusToRender.shared}
              />
              <Bookmark
                objectId={status.id}
                active={false}
                fillColor="text-blue-500 fill-blue-500"
                alreadyActed={status.bookmarked}
              />
              <CopyLink objectId={statusToRender.id} fillColor="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
