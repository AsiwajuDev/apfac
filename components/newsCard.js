import Link from "next/link";
import React from "react";
// import * as Icon from "react-feather";

const NewsCard = ({ cardTitle, cardURL, newsName, newsImage, newsDate }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 intro-y">
      <div className="zoom-in">
        <div className="box p-3 leading-tight">
          <div className="text-base font-semibold mb-3 text-green-600">
            {cardTitle}
          </div>

          <div className="flex">
            <div>
              <Link href={`${cardURL}`}>
                <a
                  className="text-base text-blue-500 hover:underline mt-1"
                  target="_blank"
                >
                  Read More
                </a>
              </Link>
            </div>
            <div className="ml-auto">
              <span className="block">
                <p className="text-xs font-semibold text-gray-500 underline">{newsDate}</p>
                {/* <img
                  className="block w-8 h-8 rounded-full bg-gray-500"
                  src={newsImage}
                  alt={newsName}
                /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
