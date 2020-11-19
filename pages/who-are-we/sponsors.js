import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";
import ImageFrame from "../../components/imageFrame";
import axios from "axios";

const Sponsors = ({ sponsors, assets }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Sponsors `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
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
                    {sponsors.map((sponsor, id) => {
                      return (
                        <ImageFrame
                          key={id}
                          className="w-full h-64"
                          imageFull={sponsor.imageURL}
                        />
                      );
                    })}
                    {/* <ImageFrame
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

// Sponsors.getInitialProps = async () => {
export async function getServerSideProps() {
  const url = "https://usapfac-admin.herokuapp.com/sponsors";
  const res = await axios.get(url);
  const data = res.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { sponsors: data, assets: data1[5] },
  };
}

export default Sponsors;
