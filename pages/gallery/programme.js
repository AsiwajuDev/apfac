import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";
import axios from "axios";

const Programme = ({ programmes, assets }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Programme `}</title>
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
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    {programmes.map((programme, id) => {
                      return (
                        <Card
                          key={id}
                          cardTitle={programme.galleryWidgetHeader}
                          mediaTitle={programme.galleryWidgetTitle}
                          media={programme.galleryWidgetImage}
                          mediaUrl={programme.galleryWidgetUrl}
                        />
                      );
                    })}
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

// Programme.getInitialProps = async () => {
export async function getServerSideProps() {
  const url = "https://usapfac-admin.herokuapp.com/gallery-widgets";
  const res = await axios.get(url);
  const data = res.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { programmes: data, assets: data1[18] },
  };
}

export default Programme;
