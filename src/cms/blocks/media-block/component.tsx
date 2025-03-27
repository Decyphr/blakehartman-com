import type { StaticImageData } from "next/image";

import React from "react";

import type { MediaBlock as MediaBlockProps } from "~/cms/payload-types";

import { Media } from "~/components/media";
import RichText from "~/components/rich-text";
import { cn } from "~/utilities/ui";

type Props = MediaBlockProps & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props;

  let caption;
  if (media && typeof media === "object")
    caption = media.caption;

  return (
    <div
      className={cn(
        "",
        {
          "container": enableGutter,
          "mx-auto": enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn(
            "border border-border rounded-[0.8rem]",
            imgClassName,
          )}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={cn(
            "mt-6",
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  );
};
