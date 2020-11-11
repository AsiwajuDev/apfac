import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import fetch from "isomorphic-unfetch";
import NewsCard from "../../components/newsCard";
import { useEffect } from "react";
import moment from "moment";
import axios from "axios";

const fetcher = async function (...args) {
  const res = await fetch(...args);
  return res.json();
};

const LocalNews = ({ posts, newsroomWidget }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/newsroom-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Local News `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top"
          style={{ backgroundImage: "url(/favicon/news.jpg)" }}
        >
          <div className="container pl-3 lg:px-10 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center  md:flex-no-wrap md:justify-between md:mx-4 lg:mx-0">
              <div className="md:w-2/6 lg:w-1/5 py-16 ">
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
              <div className="md:w-4/6 lg:w-4/5 my-auto py-10">
                <div className="mx-6">
                  {/* <p className="capitalize text-white font-bold text-2xl">
                    Newsroom
                  </p> */}
                  <div className="col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                      {posts.slice(0, 12).map((p) => (
                        <NewsCard
                          key={p.title}
                          cardTitle={p.title}
                          cardURL={p.url}
                          newsDate={moment(p.publishedAt).fromNow()}
                        />
                      ))}
                    </div>
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

export async function getServerSideProps() {
  const url = `http://newsapi.org/v2/top-headlines?country=ng&apiKey=33fdf48678554c70b4dadf00fca13abb`;
  const res = await fetcher(url);
  const posts = res.articles;

  const url1 = "https://usapfac-admin.herokuapp.com/newsroom-widgets";
  const res1 = await axios.get(url1);
  const newsroomWidget = res1.data;

  return {
    props: {
      posts,
      newsroomWidget,
    },
  };
}

// export async function getStaticProps() {
//   const url = `http://newsapi.org/v2/top-headlines?country=ng&apiKey=33fdf48678554c70b4dadf00fca13abb`;
//   const res = await fetcher(url);
//   const posts = res.articles;

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default LocalNews;
