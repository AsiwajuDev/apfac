import React from "react";
import Link from "next/link";
import { withRouter, RouterProps } from "next/router";
import ProductDefinition from "./ProductDefinition";

const Product = ({ id, imageUrl, price, productName }) => {
  const product = {
    id: id,
    imageUrl: imageUrl,
    price: price,
    productName: productName,
  };
  return (
    <div className="col-span-12 sm:col-span-3 xl:col-span-3 intro-y">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="bg-white">
          <a>
            <img className="w-full h-65" src={imageUrl} alt={imageUrl} />
          </a>

          <div className="px-6 pb-4 text-center ">
            {/* <div className="font-semibold capitalize text-green-400 text-xl">
              {productName}
            </div> */}
            <div className="sm:flex-auto">
              <p className="text-red-700 font-bold text-4xl">${price}</p>
              <ProductDefinition {...product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
