import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
// import ReactBnbGallery from "react-bnb-gallery";
import { useState } from "react";

const FirstEdition = ({ images }) => {
 
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout
      imageUrl={{ backgroundImage: "url(/favicon/experience-header.jpg)" }}
    >
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div className="flex flex-wrap justify-center  md:flex-no-wrap md:justify-between lg:mx-0">
          <div className="w-full sm:w-2/6 lg:w-1/5">
            <div className="hidden md:block bg-white overflow-hidden">
              <div className="px-6 pt-12 sm:ml-4 lg:ml-10">
                <div className="mb-4">
                  <p className="mb-3">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      1st Edition
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>

                  <Frame
                    mediaTitle="Africa peace festival art and culture 2019"
                    media="/favicon/experience1.jpg"
                    className="mt-3 mb-1 h-24  w-48 lg:w-40"
                  />
                </div>
                <div className="mb-4">
                  <p className="mb-3">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      2nd Edition
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>
                  <Frame
                    mediaTitle="Africa peace festival art and culture 2020"
                    media="/favicon/experience2.jpg"
                    className="mt-3 mb-1 h-24  w-48 lg:w-40"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-4/6 lg:w-4/5">
            <div className="container lg:mx-auto">
              <div
                className="bg-cover bg-no-repeat bg-top py-40"
                style={{ backgroundImage: "url(/favicon/experience.jpg)" }}
              >
                <div className="container px-5 py-10 lg:mx-auto">
                  <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
                    <div className="mb-4">
                      <div className="mx-3 sm:mx-6 mb-6">
                        <p className="capitalize text-white font-bold text-xl">
                          Experience
                        </p>
                        <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                          watch the
                          <br /> shows online
                        </p>
                        {/* <button onClick={() => setIsOpen(true)}>
                          Open gallery
                        </button>
                        <ReactBnbGallery
                          show={isOpen}
                          photos={images}
                          onClose={() => setIsOpen(false)}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4">
                    <div className="mx-20">
                      <p className="capitalize text-white font-bold text-2xl">
                        Experience
                      </p>
                      <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                        watch the shows online
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2"></div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

FirstEdition.getInitialProps = async () => {
  const res = await fetch(
    "https://res.cloudinary.com/christekh/image/list/xmas.json"
  );
  // const res = await fetch(
  //   "http://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=33fdf48678554c70b4dadf00fca13abb"
  // );
  const data = await res.json();
  return { images: data.resources };
};

export default FirstEdition;
