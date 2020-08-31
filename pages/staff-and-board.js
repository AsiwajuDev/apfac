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
              <div className="mb-10 sm:mx-6 flex justify-center">
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
                      image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      bgColor="bg-white"
                      imageTitle="Azubuike Okoronkwo"
                      imageBody="Director"
                      pageUrl="azubuike-chinedum"
                    />
                    <CardFrame
                      image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      bgColor="bg-white"
                      imageTitle="Franchesska Berry"
                      imageBody="Director"
                      pageUrl="franchesska-berry"
                    />
                    <CardFrame
                      image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      bgColor="bg-white"
                      imageTitle="Nivia Nduka"
                      imageBody="Director"
                      pageUrl="nivia-nduka"
                    />
                    <CardFrame
                      image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                      bgColor="bg-white"
                      imageTitle="Mwalimu Kabaila"
                      imageBody="Director"
                      pageUrl="mwalimu-kabaila"
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
