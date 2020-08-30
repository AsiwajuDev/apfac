import React from "react";
import Frame from "./frame";

const Card = ({ cardTitle, mediaTitle, media }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
      <div className="">
        <div className="bg-white py-5 px-16">
          <div>
            <p className="capitalize font-semibold text-sm sm:text-base mb-1">
              {cardTitle}
            </p>
            <div className="border-2 border-red-600 w-16"></div>
          </div>
          <Frame mediaTitle={mediaTitle} media={media} />
        </div>
      </div>
    </div>
  );
};

export default Card;
