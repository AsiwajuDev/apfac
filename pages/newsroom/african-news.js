import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import YoutubeFrame from "../../components/youtubeFrame";
import axios from "axios";

const AfricanNews = ({ africanNews }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/newsroom-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - African News `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top py-6"
          style={{ backgroundImage: "url(/favicon/news.jpg)" }}
        >
          <div className="container pl-3 lg:px-10 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center  md:flex-no-wrap md:justify-between md:mx-4 lg:mx-0">
              <div className="md:w-2/6 lg:w-1/5">
                <div className="hidden md:block w-56 rounded bg-white overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          African News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame
                        media="/favicon/newsroom3.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                        mediaUrl="newsroom/local-news"
                      />
                    </div>
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          Global News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame
                        media="/favicon/newsroom2.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                        mediaUrl="newsroom/african-news"
                      />
                    </div>
                    <div className="mb-3">
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          World News
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>
                      <Frame
                        media="/favicon/newsroom2.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                        mediaUrl="newsroom/world-news"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-4/6 lg:w-4/5 my-auto">
                <div className="mx-6 lg:mx-24">
                  <YoutubeFrame
                    width={500}
                    height={400}
                    videoId={africanNews.newsID}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

AfricanNews.getInitialProps = async () => {
  const url = `http://localhost:1337/newsrooms`;
  // const url = `https://usapfac-admin.herokuapp.com/about`;
  const res = await axios.get(url);
  const data = res.data;

  return { africanNews: data[1] };
};

export default AfricanNews;
