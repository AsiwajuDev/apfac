import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import axios from "axios";
import MDReactComponent from "markdown-react-js";

export default function Nivia({ nivia, aboutWidget, assets }) {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Nivia Nduka `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
        >
          <div className="container px-2 sm:px-5 lg:mx-auto">
            <div className="flex flex-wrap justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6">
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    {nivia.header}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull={nivia.image}
                      />
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <MDReactComponent text={nivia.body} />
                        {/* 
                        <p className="mb-2">
                          He is a highly energetic, experienced and creative
                          personality, Afrikan Simba, essentially a storyteller,
                          immersed himself in musical performance from the
                          tender age of 10, getting involved with local sound
                          systems.
                        </p>
                        <p className="mb-2">
                          In 1990 he started studio recording with Dub Jockey
                          Studios, yielding his first release in 1992, a track
                          entitled Give Thanks. Since then he has relentlessly,
                          to this day, continued recoding and performing
                          internationally, in major events and festivals, most
                          times headlining, across, Europe, Africa, the
                          Caribbean, S. America and the Middle East.
                        </p>
                        <p className="mb-2">
                          In 2004 he gained a BA Hons degree in Content Creation
                          for Broadcasting and New Media, Simba in 2005 joined
                          Voice Of Africa Radio as a technical advisor and
                          trainer and later became manager. Voice of Africa
                          Radio had a temporary 5yr licence to broadcast,
                          becoming Africa's only licensed radio station in
                          Europe.
                        </p>
                        <p className="mb-2">
                          In 2012/13 he furthered his education gaining a Post
                          Graduate Certificate in Education and then, whilst
                          continuing to perform and record as usual, held
                          positions of Lecturer of Media Studies at Westminster
                          Kingsway College, Kings Cross, London UK and Harlow
                          College UK.
                        </p>
                        <p className="mb-2">
                          Furthermore, he obtained other experiences in Project
                          management for Ayamba, Reality Shock and Sirius record
                          labels duties including origination of project, event
                          planning and co-ordination, co-ordinating with
                          mastering/design and distribution teams, etc. and also
                          was the Originator and Curator-in-chief of the hugely
                          successful annual Goodly Words Cultural Winter.
                        </p>
                        <p className="mb-2">He is married with children.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block rounded w-64 bg-white justify-center h-68 overflow-hidden shadow-lg">
                <div className="mx-12 py-4">
                  {aboutWidget.map((about, id) => {
                    return (
                      <div key={id}>
                        <div className="mb-4">
                          <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                            {about.header}
                          </p>
                          <div className="border-2 border-red-600 w-16"></div>
                        </div>
                        <div>
                          <Frame
                            media={about.image}
                            className="mt-3 mb-1 h-24  w-48 lg:w-40"
                            mediaUrl={`who-are-we/${about.widgetURL}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = `https://usapfac-admin.herokuapp.com/board-details`;
  const urls = `https://usapfac-admin.herokuapp.com/about-widgets`;
  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;

  const res2 = await axios.get(url1);
  const data1 = res2.data;

  const res = await axios.get(url);
  const data = res.data;

  const res1 = await axios.get(urls);
  const datas = res1.data;

  return {
    props: { nivia: data[3], aboutWidget: datas, assets: data1[43] },
  };
}
