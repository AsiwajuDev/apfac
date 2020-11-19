import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import axios from "axios";
// import { useEffect, useState } from "react";

const Values = ({ value, aboutWidget, assets }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Values `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  {/* <p className="text-white font-bold text-xl">who we are</p> */}
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    core value
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      {/* <div className="text-green-400 font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        A Substainable Goal to Grow Together
                      </div> */}
                      <p className="text-gray-800 text-sm text-justify lg:text-base leading-tight">
                        <span className="text-5xl uppercase font-semibold initial-letter">
                          {value.header}
                        </span>
                        {value.body}
                        {/* core value is to ensure that PAN AFRIKAN youths are
                        trained, developed and empowered by enhanced skills
                        acquisition, social and economic development,
                        educational development within communities with arts
                        cultural related activities. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-64 bg-white justify-center overflow-hidden shadow-lg">
                <div className="py-4 mx-8 lg:mx-12">
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
                            mediaUrl={`who-are-we/${about.widgetURL}`}
                            className="mt-3 mb-1 h-24  w-48 lg:w-40"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = "https://usapfac-admin.herokuapp.com/value";
  const res = await axios.get(url);
  const data = res.data;

  const urls = `https://usapfac-admin.herokuapp.com/about-widgets`;
  const res1 = await axios.get(urls);
  const datas = res1.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { value: data, aboutWidget: datas, assets: data1[2] },
  };
}

export default Values;
