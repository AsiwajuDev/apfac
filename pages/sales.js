import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import ProductList from "../components/ProductList";
import Shop from "../components/shop";

const Sales = ({ products }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
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
                    <p className="text-white text-5xl leading-none sm:text-6xl font-bold pb-4">
                      sales and payments
                    </p>
                  </div>
                  <div>
                    {/* <ProductList products={products} /> */}
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
