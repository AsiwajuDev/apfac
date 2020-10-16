import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";
import ImageFrame from "../../components/imageFrame";

export default function Sponsors() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Sponsors `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="flex justify-center">
                <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                  sponsors
                </p>
              </div>
              <div className="mb-10 mx-6">
                <div className="col-span-12 mt-8">
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/usapfac.jpeg"
                    />
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/lagos.jpeg"
                    />
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/royal-roots.jpeg"
                    />
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/unity.jpeg"
                    />
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/congress.jpeg"
                    />
                    <ImageFrame
                      className="w-full h-64"
                      imageFull="/about/nadia.jpeg"
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
