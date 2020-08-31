import React from "react";
import Link from "next/link";

const CardFrame = ({
  image,
  imageName,
  imageBody,
  bgColor,
  pageUrl,
  imageTitle,
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div className={bgColor}>
          <Link href={`/board/${pageUrl}`}>
            <a>
              <img class="w-full h-64" src={image} alt={imageName} />
            </a>
          </Link>
          <div class="px-6 py-4 text-center">
            <div class="font-semibold text-green-400 text-xl">{imageTitle}</div>
            <p class="text-gray-700 font-semibold text-base">{imageBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFrame;
