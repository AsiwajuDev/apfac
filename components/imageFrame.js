import React from "react";
import Link from "next/link";

const ImageFrame = ({ imageFull, imageNameFull, className }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="max-w-sm rounded overflow-hidden">
        <img className={className} src={imageFull} alt={imageNameFull} />
      </div>
    </div>
  );
};

export default ImageFrame;
