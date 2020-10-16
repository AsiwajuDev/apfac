import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import CardFrame from "../../components/cardFrame";

export default function Staff() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Staff `}</title>
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
                  staff
                </p>
              </div>
              <div className="mb-10 sm:mx-6 flex justify-center">
                <div className="col-span-12 mt-8">
                  <div className="grid grid-cols-12 sm:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 mt-5">
                    <CardFrame
                      image="/about/PATRICK-DURODOLA.png"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="staff/patrick-durodola"
                    />
                    <CardFrame
                      image="/about/AZUBUIKE-CHINEDUM-OKORONKWO.png"
                      bgColor="bg-white"
                      imageTitle="Azubuike Okoronkwo"
                      imageBody="Director"
                      pageUrl="staff/azubuike-chinedum"
                    />
                    {/* <CardFrame
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
                    /> */}
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
