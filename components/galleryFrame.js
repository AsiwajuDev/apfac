import React from "react";
import Frame from "./frame";

const GalleryFrame = ({ media }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="">
        <div className="">
          <Frame media={media} />
        </div>
      </div>
    </div>
  );
};

export default GalleryFrame;
