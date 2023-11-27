import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import RelativeDate from "@/components/shared/relativeDate";
import DOMPurify from "dompurify";
import Like from "./actions/like";
import Comment from "./actions/comment";
import Share from "./actions/share";
import Bookmark from "./actions/bookmark";
import CopyLink from "./actions/copylink";
import { Status } from "@/lib/data/core/entities/Status";
import { useEffect } from "react";
import Link from "next/link";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function Status({
  id,
  name,
  avatar,
  authorUrl,
  text,
  createdAt,
  sharesCount,
  commentsCount,
  likesCount,
  images,
}: Status) {
  const sanitizedHTMLText = DOMPurify.sanitize(text);
  const photoswipeSelector = "photoswipeSelector" + id;

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      gallery: "#" + photoswipeSelector,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, [photoswipeSelector]);

  const masonryOptions = {
    transitionDuration: 0,
  };

  return (
    <div role="status" key="1" className="m-2 border-b status-container">
      <div className="md:flex">
        <div className="p-8 w-full">
          <div className="flex justify-between w-full">
            <div className="flex">
              <Avatar className="mr-3">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>NM</AvatarFallback>
              </Avatar>
              <div>
                <div className="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  {name}
                </div>
                <div className="text-gray-400 dark:text-gray-300">
                  <a href={authorUrl}>{authorUrl}</a>
                </div>
              </div>
            </div>
            <div role="date" className="text-gray-400 dark:text-gray-300">
              <RelativeDate date={createdAt} />
            </div>
          </div>

          <div className="status-content mt-4 text-black dark:text-gray-300">
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTMLText }} />

            <div className="pswp-gallery" id={photoswipeSelector}>
              {images?.map((image, index) => (
                <Link
                  href={image.fullUrl || ""}
                  key={index}
                  data-pswp-width={image.fullWidth}
                  data-pswp-height={image.fullHeight}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    key={index}
                    src={image.previewUrl || ""}
                    alt={`Image ${index + 1}`}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex mt-6 justify-between items-center">
            <div className="flex space-x-4 text-gray-400 dark:text-gray-300 justify-center w-full">
              <Like count={likesCount} fillColor="fill-red-500 text-red-500" />
              <Comment count={commentsCount} fillColor="text-red-500" />
              <Share count={sharesCount} fillColor="text-red-500" />
              <Bookmark
                active={false}
                fillColor="text-blue-500 fill-blue-500"
              />
              <CopyLink fillColor="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
