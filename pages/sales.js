import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Sales() {
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
                  {/* <div className="border-l-4 border-red-600 px-4">
                  <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div className="text-green-400 font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        A Substainable Goal to Grow Together
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
