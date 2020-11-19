import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import axios from "axios";

export default function GroupOffers({ assets }) {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Group Offers `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  <p className="capitalize text-white font-bold text-xl">
                    our story
                  </p>
                  <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                    we're good
                    <br /> together
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                    <div className="px-4 py-4">
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
                </div>
              </div>
              <div className="hidden md:block rounded w-56 bg-white overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <p className="mb-4">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Recent Posts
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>

                  <div>
                    <Frame
                      media="/favicon/media1.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      mediaUrl="#"
                    />
                    <Frame
                      media="/favicon/media2.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      mediaUrl="#"
                    />
                    <Frame
                      media="/favicon/media3.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      mediaUrl="#"
                    />
                  </div>
                  <p className="mb-4">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Category
                    </div>
                  </p>
                  <div>
                    <Frame />
                  </div>
                </div>
              </div>
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { assets: data1[21] },
  };
}
