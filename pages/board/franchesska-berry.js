import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Berry() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Franchesska Berry `}</title>
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
                    {/* {!header || header.title.rendered} */} Franchesska Berry
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull="/about/FRANCHESSKA.jpeg"
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
                          She is an eloquent performer, choreographer, and
                          international intercultural arts, educator.
                        </p>
                        <p className="mb-2">
                          Franchesska specializes in dances and traditional
                          culture of West Africa and the African Diaspora;
                          however, her expertise is not limited to African based
                          forms. Franchesska's unique dance style is heavily
                          accentuated by her comprehensive background in the
                          western classical forms of ballet, modern, jazz and
                          improvisational dance. Franchesska does not segregate
                          dance and feels all movement stems from the same
                          wellspring of human expression, dialects of the same
                          language. Franchesska developed her professorial
                          expertise as an academic leader in international
                          intercultural arts education, termed the Relational
                          Model of Education. Pedagogy firmly rooted in the
                          philosophical anthropology of African and
                          African-American dance and cultural history.
                          Franchesska attempts to know the possibility of
                          enlightenment, appreciation, and healing from original
                          African cultures, lost, forgotten, distorted, and
                          denied through the arts.{" "}
                        </p>
                        <p className="mb-2">
                          She earned the Distinguished Honor of Fulbright
                          Fellow/Scholar to Cairo, Egypt at the prestigious
                          Academy of Arts as artiste, choreographer for the
                          Royal Ballet of Cairo and as professor, performer and
                          lecturer of “Dance and The Relationship Model For A
                          Multicultural Classroom” at the American University of
                          Cairo, the American/African-American critical pedagogy
                          she fashioned into an intercultural arts
                          program-international in its reach and value.
                        </p>
                        {/* <ul className="list-disc mx-8 mb-2">
                          <li>
                            Improve the operational systems, processes and
                            policies in support of organizations mission
                            specifically, support better management reporting,
                            information flow and management; business process
                            and organizational planning.
                          </li>
                          <li>
                            Manage and increase effectiveness and efficiency of
                            support services (HR, IT and Finance), through
                            improvements to each function as well as
                            coordination and communication between support and
                            business functions.
                          </li>
                          <li>
                            Play a significant role in long term planning,
                            including an initiative geared toward operational
                            excellence.
                          </li>
                          <li>
                            Oversee overall financial management, planning,
                            systems and control.
                          </li>
                          <li>
                            Management of agency budget in coordination with the
                            Executive Director.
                          </li>
                          <li>Member Lagos Business Club</li>
                          <li>
                            Acts as a spokesperson for the organization's
                            artistic purpose via speaking engagements, public
                            and social appearances, and, as, requested, at
                            fundraising events and solicitations.
                          </li>
                          <li>
                            Fosters the development of the good relations with
                            other cultural organizations by participating in
                            meetings and joint activities where appropriate.
                          </li>
                        </ul>
                        <p className="mb-2">
                          He relentlessly render a high level of result oriented
                          performance towards achieving organizational goals and
                          aspirations by contributing to the development of the
                          organization.
                        </p> 
                        <p className="mb-2">He is married with children.</p> */}
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
