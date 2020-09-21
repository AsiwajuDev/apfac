import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";
import CardFrame from "../components/cardFrame";

export default function Board() {
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
              <div className="mb-10 sm:mx-6 flex justify-center">
                <div className="col-span-9 mt-8">
                  <div className="grid grid-cols-12 gap-6 sm:gap-10 mt-5">
                    <CardFrame
                      image="/about/PATRICK-DURODOLA.png"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="board/patrick-durodola"
                    />
                    <CardFrame
                      image="/about/AZUBUIKE-CHINEDUM-OKORONKWO.png"
                      bgColor="bg-white"
                      imageTitle="Azubuike Okoronkwo"
                      imageBody="Director"
                      pageUrl="board/azubuike-chinedum"
                    />
                    <CardFrame
                      image="/about/FRANCHESSKA.jpeg"
                      bgColor="bg-white"
                      imageTitle="Franchesska Berry"
                      imageBody="Director"
                      pageUrl="board/franchesska-berry"
                    />
                    <CardFrame
                      image="/about/nadia.jpeg"
                      bgColor="bg-white"
                      imageTitle="Nivia Nduka"
                      imageBody="Director"
                      pageUrl="board/nivia-nduka"
                    />
                    <CardFrame
                      image="/about/MWALIMU KABAILA.jpeg"
                      bgColor="bg-white"
                      imageTitle="Mwalimu Kabaila"
                      imageBody="Director"
                      pageUrl="board/mwalimu-kabaila"
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
