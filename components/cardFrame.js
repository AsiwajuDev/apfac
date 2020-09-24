import React from "react";
import Link from "next/link";

const CardFrame = ({
  image,
  imageName,
  imageBody,
  bgColor,
  pageUrl,
  imageTitle,
  imageHead,
}) => {
  return (
    <div className="col-span-12 sm:col-span-3 xl:col-span-3 intro-y">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className={bgColor}>
          <Link href={`/${pageUrl}`}>
            <a>
              <img className="w-full h-66" src={image} alt={imageName} />
            </a>
          </Link>
          <div className="px-6 py-4 text-center">
            <div className="font-semibold capitalize text-green-400 text-xl">
              {imageTitle}
              <br />
              {imageHead}
            </div>
            <p className="text-gray-700 font-semibold text-base">{imageBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFrame;
