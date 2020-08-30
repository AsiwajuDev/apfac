import React from "react";
import Link from "next/link";

const ImageFrame = ({
  image,
  imageName,
  imageBody,
  bgColor,
  pageUrl,
  imageTitle,
}) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      {/* <div className="text-center">
        <div className=" py-4 shadow-lg rounded-lg">
          <div>
            <img
              className="mt-3 h-40 w-40 mx-auto"
              src={image}
              alt={imageName}
            />
          </div>
          <p className="text-base sm:text-lg mb-1">{imageBody}</p>
        </div>
      </div> */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div className={bgColor}>
          <Link href={`/board/${pageUrl}`}>
            <a>
              <img class="w-full h-64" src={image} alt={imageName} />
            </a>
          </Link>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl">{imageTitle}</div>
            <p class="text-gray-700 font-semibold text-base">{imageBody}</p>
          </div>
          {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageFrame;
