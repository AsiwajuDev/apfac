import Head from "next/head";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

import Layout from "../../../components/layout";
import { SITE_NAME } from "../../../lib/constants";
import Gallery from "../cloudinary/Gallery";

const fetcher = async function (...args) {
  const res = await fetch(...args);
  return res.json();
};

const SeminarGalleryImage = (images) => {
  const router = useRouter();

  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/gallery-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - 1st Edition Pictures Gallery `}</title>
      </Head>
      <div>
        <div className="bg-cover bg-no-repeat bg-top pt-32 pb-2 bg-gray-800">
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="flex justify-between mx-4">
                <div className="">
                  <p className="capitalize text-white font-semibold text-2xl">
                    Gallery
                  </p>
                  <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                    africa alive!
                  </p>
                </div>
                <div onClick={() => router.back()}>
                  <span className="capitalize cursor-pointer hover:text-red-600 text-base text-white italic sm:text-2xl">
                    <i class="fa fa-chevron-left"></i>
                    <span className="px-2">Back</span>
                  </span>
                </div>
              </div>
              <div className="mb-10 mx-6">
                <div className="col-span-12 mt-8">
                  <Gallery images={images.images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

SeminarGalleryImage.getInitialProps = async () => {
  const url = `https://res.cloudinary.com/dxwzdkhyb/image/list/1stedition.json`;
  const res = await fetcher(url);

  return { images: res.resources };
};

export default SeminarGalleryImage;
