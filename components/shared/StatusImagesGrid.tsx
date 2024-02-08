import { StatusImage } from "@/lib/data/core/entities/Status";
import Link from "next/link";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

interface StatusImagesGridProps {
  images: StatusImage[];
  statusId: string;
}

export default function StatusImagesGrid({
  images,
  statusId,
}: StatusImagesGridProps) {
  const photoswipeSelector = "photoswipeSelector" + statusId;

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

  const getGridItemClasses = (index: number) => {
    switch (images.length) {
      case 1:
        return "col-span-2";
      case 2:
        return "col-span-1";
      case 3:
        return index === 1 ? "col-span-1 row-span-2" : "col-span-1";
      case 4:
        return "col-span-1";
      default:
        return "";
    }
  };

  return (
    <div
      className="pswp-gallery grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id={photoswipeSelector}
      onClick={(e) => e.stopPropagation()}
    >
      {images.map((image, index) => (
        <Link
          key={index}
          href={image.fullUrl || ""}
          data-pswp-width={image.fullWidth}
          data-pswp-height={image.fullHeight}
          target="_blank"
          className={getGridItemClasses(index)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            // src={image.previewUrl || ""}
            src={
              image.hash
                ? "data:image/jpeg;base64," + image.hash
                : image.previewUrl || ""
            }
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
