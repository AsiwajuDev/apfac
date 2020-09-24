import Head from "next/head";
import fetch from "isomorphic-unfetch";

import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";
import Gallery from "./cloudinary/Gallery";

const fetcher = async function (...args) {
  const res = await fetch(...args);
  return res.json();
};

const FirstEditionPicture = (images) => {
  console.log(JSON.stringify(images.images))
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
                <div className="col-span-12 mt-8">
                  
                    <Gallery images={images.images} />
                    {/* <Card
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
                    /> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

FirstEditionPicture.getInitialProps = async () => {
  const url = `https://res.cloudinary.com/dxwzdkhyb/image/list/1stedition.json`;
  const res = await fetcher(url);
  // axios.get(url)
  //           .then(res => {
  //               console.log(res.data.resources);
  //               //this.setState({gallery: res.data.resources});
  //           });
  console.log(JSON.stringify(res.data))
  return { images: res.resources};
};

export default FirstEditionPicture;