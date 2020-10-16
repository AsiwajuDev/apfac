import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Kabaila() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Mwalimu Kabaila `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="container px-2 sm:px-5 lg:mx-auto">
            <div className="flex flex-wrap justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6">
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    {/* {!header || header.title.rendered} */} Mwalimu Kabaila
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull="/about/MWALIMU KABAILA.jpeg"
                      />
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        {/* <p
                          dangerouslySetInnerHTML={{
                            __html: !header || header.content.rendered,
                          }}
                        /> */}
                        {/* {content.rendered} */}
                        {/* {content} */}

                        <p className="mb-2">
                          He is the Founder and Chair National African American
                          Congress Forum, Representing the Americas.
                        </p>
                        <p className="mb-2">
                          Started is educational career at Southwest College
                          where he obtained an AA degree; Political Science and
                          African American Studies and later proceeded to the
                          University of Southern Calif. (USC) and had a BS
                          degree, Cum Laude ; Public Administration, he also
                          attended the University of Calif. Los Angeles (UCLA)
                          as a Doctoral Candidate, Political Science
                          w/specialization So. Africa Politics and finally Univ.
                          of So. Calif. Law School.
                        </p>
                        <p className="mb-2">
                          His professional experience is as stated below:
                        </p>
                        <ul className="list-disc mx-8 mb-2">
                          <li>
                            Program Director – City of Inglewood, Ca., Summer
                            Youth Program, 1977-78
                          </li>
                          <li>
                            Facility Administrator – Kedren Mental Health
                            Center, 1979-81
                          </li>
                          <li>
                            L.A County Deputy Probation Officer – Juvenile Div.
                            , 1981-2007
                          </li>
                        </ul>
                        {/* <p className="mb-2">
                          He relentlessly render a high level of result oriented
                          performance towards achieving organizational goals and
                          aspirations by contributing to the development of the
                          organization.
                        </p> */}

                        <p className="mb-2">
                          He is current working on the following: Simbamaat
                          Consultants - Principal - Engaged in Sustainable
                          Development and Investments Africa, Africa , America
                          and the Carribean in Triangular Development
                          Strategies, Executive Consultant - Global Industrial
                          Numbers Company, Inc. Consultant - Global Economic
                          Consortium Corporation, Foundation for Sustainable
                          Development of Africa (FOSDAF) - Vice Chair of the
                          Americas, Author - work in progress an
                          Autobiography/Memoirs, Co Editor - Sankofa Press.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block rounded w-64 bg-white justify-center h-68 overflow-hidden shadow-lg">
                <div className="mx-12 py-4">
                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        history
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame
                        media="/favicon/about1.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        values
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame
                        media="/favicon/about1.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        leadership
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame
                        media="/favicon/about3.jpg"
                        className="mt-3 mb-1 h-24  w-48 lg:w-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Patrick.getInitialProps = async () => {
//   let url = "https://test.usapfac.org/wp-json/wp/v2/pages/2";
//   let result;
//   try {
//     const res = await fetch(url);
//     result = await res.json();
//     console.log(result);
//   } catch (err) {
//     console.log("Error", err);
//     result = [];
//   }
//   return {
//     result: result,
//   };
// };
