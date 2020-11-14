import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Card from "../../components/card";
import axios from "axios";

const fetcher = async function (...args) {
  const res = await fetch(...args);
  return res.json();
};

const FirstEditionPicture = ({ firstEditionPictures, assets }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - 1st Edition Pictures `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-32 pb-2"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="mx-4">
                <p className="capitalize text-white font-semibold text-2xl">
                  Gallery
                </p>
                <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                  africa alive!
                </p>
              </div>
              <div className="mb-10 mx-6">
                <div className="col-span-12 mt-8">
                  {/* <Gallery images={images.images} /> */}
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    {firstEditionPictures.map((firstEditionPicture, id) => {
                      return (
                        <Card
                          key={id}
                          cardTitle={firstEditionPicture.galleryWidgetHeader}
                          mediaTitle={firstEditionPicture.galleryWidgetTitle}
                          media={firstEditionPicture.galleryWidgetImage}
                          mediaUrl={firstEditionPicture.galleryWidgetUrl}
                        />
                      );
                    })}

                    {/* <Card
                      cardTitle="Seminar"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery2.jpg"
                      mediaUrl="gallery/seminar"
                    />
                    <Card
                      cardTitle="Meeting"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery3.jpg"
                      mediaUrl="gallery/meeting"
                    />
                    <Card
                      cardTitle="2020 Programme"
                      mediaTitle="Africa peace festival art and culture 2019"
                      media="/favicon/gallery4.jpg"
                      mediaUrl="gallery/programme"
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
};

// FirstEditionPicture.getInitialProps = async () => {
export async function getServerSideProps() {
  const url = "https://usapfac-admin.herokuapp.com/gallery-widgets";
  const res = await axios.get(url);
  const data = res.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { firstEditionPictures: data, assets: data1[12] },
  };
}

export default FirstEditionPicture;
