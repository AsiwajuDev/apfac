import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import ProductList from "../components/product/ProductList";
import Shop from "../components/shop";
import Product from "../components/product/Product";
const productss = [
  {
    id: "Product 1",
    // productName: "Product 1",
    imageUrl: "/product/product1.jpeg",
    price: 10.0,
  },
  {
    id: "Product 2",
    // productName: "Product 2",
    imageUrl: "/product/product2.jpeg",
    price: 10.0,
  },
  {
    id: "Product 3",
    // productName: "Product 3",
    imageUrl: "/product/product3.jpeg",
    price: 15.0,
  },
  {
    id: "Product 3",
    // productName: "Product 4",
    imageUrl: "/product/product4.jpeg",
    price: 7.0,
  },
  {
    id: 5,
    // productName: "Product 5",
    imageUrl: "/product/product5.jpeg",
    price: 10.0,
  },
  {
    id: 6,
    // productName: "Product 5",
    imageUrl: "/product/product6.jpeg",
    price: 8.0,
  },
];
const Sales = ({ products }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="bg-orange-400 bg-opacity-75 pt-4 pb-20 ">
            <div className="container px-5 lg:mx-auto">
              <div className="flex flex-wrap justify-center">
                <div className="mb-4">
                  <div className="mx-6 mb-6">
                    <p className="text-white text-center text-5xl leading-none sm:text-6xl font-bold">
                      sales and payments
                    </p>
                  </div>
                  <div>
                    <ProductList products={productss} />
                    {/* <Shop/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.snipcart.com/themes/v3.0.0-beta.4/default/snipcart.js"></script>
      <div
        hidden
        id="snipcart"
        data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
      ></div>
    </Layout>
  );
};

export default Sales;
