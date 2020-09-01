import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";

export default function FirstEditionPicture() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/gallery-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-32 pb-2"
          style={{ backgroundImage: "url(/favicon/gallery.jpg)" }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="mx-4">
                <p className="capitalize text-white font-semibold text-2xl">
                  Gallery
                </p>
                <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                  africa alive!
                </p>
              </div>
              <div className="mb-10 mx-6">
                <div class="col-span-12 mt-8">
                  <div class="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    <Card
                      cardTitle="1st Edition Pictures"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery1.jpg"
                    />
                    <Card
                      cardTitle="Seminar"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery2.jpg"
                    />
                    <Card
                      cardTitle="Meeting"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery3.jpg"
                    />
                    <Card
                      cardTitle="2020 Programme"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery4.jpg"
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
