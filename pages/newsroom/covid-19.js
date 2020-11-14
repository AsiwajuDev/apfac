import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import axios from "axios";

const Covid = ({ covid, newsroomWidget }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${covid.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Covid-19 `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-16 pb-24"
          style={{ backgroundImage: `url(${covid.bodyImage})` }}
        >
          <div className="container pl-3 lg:px-10 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center  md:flex-no-wrap md:justify-between md:mx-4 lg:mx-0">
              <div className="md:w-2/6 lg:w-1/5">
                <div className="hidden md:block w-56 rounded bg-white overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    {newsroomWidget.map((newsroom, id) => {
                      return (
                        <div className="mb-4" key={id} e>
                          <p className="mb-3">
                            <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                              {newsroom.header}
                            </div>
                            <div className="border-2 border-red-600 w-16"></div>
                          </p>

                          <Frame
                            media={newsroom.image}
                            className="mt-3 mb-1 h-24 w-48 lg:w-40"
                            mediaUrl={`newsroom/${newsroom.widgetURL}`}
                          />
                        </div>
                      );
                    })}

                    {/* <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          African News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame
                        media="/favicon/newsroom2.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                        mediaUrl="newsroom/local-news"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="md:w-4/6 lg:w-4/5 my-auto">
                <div className="mx-6 lg:mx-24">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={covid.newsID}
                    options={{ height: 450 }}
                  />
                  {/* <p className="capitalize text-white font-bold text-2xl">
                    Newsroom
                  </p>
                  <p className="text-white text-4xl mx-0 leading-none sm:text-5xl lg:text-6xl font-bold pb-4">
                    watch thousands of news and series on all your devices...
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Covid.getInitialProps = async () => {
export async function getServerSideProps() {
  const url = `https://usapfac-admin.herokuapp.com/newsrooms`;
  const res = await axios.get(url);
  const data = res.data;

  const url1 = "https://usapfac-admin.herokuapp.com/newsroom-widgets";
  const res1 = await axios.get(url1);
  const datas = res1.data;

  return {
    props: { covid: data[0], newsroomWidget: datas },
  };
}

export default Covid;
