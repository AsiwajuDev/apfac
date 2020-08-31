import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";
import CardFrame from "../components/cardFrame";

export default function Staff() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top py-12"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="flex justify-center">
                <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                  directors
                </p>
              </div>
              <div className="mb-10 mx-6">
                <div class="col-span-12 mt-8">
                  <div class="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    <CardFrame
                      image="/about/patrick-durodola.jpeg"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="patrick-durodola"
                    />
                    <CardFrame
                      image="/about/patrick-durodola.jpeg"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="patrick-durodola"
                    />
                    <CardFrame
                      image="/about/patrick-durodola.jpeg"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="patrick-durodola"
                    />
                    <CardFrame
                      image="/about/patrick-durodola.jpeg"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="patrick-durodola"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
