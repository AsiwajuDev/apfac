import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function About() {
  fetch("https://test.usapfac.org/wp-json/wp/v2/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/about.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  <p className="text-white font-bold text-xl">who we are</p>
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    the power
                    <br />
                    of great culture
                    <br /> and Africa
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="max-w-2xl rounded bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div className="text-green-400 capitalize font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        {/* A Substainable Goal to Grow Together */}
                        history/about us
                      </div>
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <p className="mb-2">
                          Afrika Peace Festival of Arts and Culture (APFAC) is
                          an initiative of United States of Afrika Peace
                          Festival of Arts and Culture. It was conceived in 2013
                          and was officially registered with the State of
                          Georgia, Secretary of State, Corporate Division on the
                          05/20/2019 with control number 19044052
                        </p>
                        <p className="mb-2">
                          Afrika Peace Festival of Arts and Culture (APFAC) is a
                          501c non-profit, non-partisan global dynamic
                          networking think tank group of high-level Pan African
                          leaders from across the globe with a clearly defined
                          goals centered on developing their communities and
                          fostering strong bi-lateral economic relationships
                          between their communities and the rest of the world
                        </p>
                        <p className="mb-2">
                          APFAC is the continuation of the Pan African movement
                          towards global PEACE as conceived by our founding
                          father Marcus Garvey, who said that “ Africa for
                          Africans…at home and abroad” and also that “A people
                          without the knowledge of their past history, origin
                          and culture is like a tree without roots”. On these
                          two premises, APFAC is envisaged to be both a local
                          and international Pan African festival of Arts and
                          Culture for comprehensive evaluation of the
                          socio-economic, political and intellectual development
                          of Pan African youths in the 21st century.
                        </p>
                        <p className="mb-2">
                          One of the pre-eminent objectives of APFAC is to
                          consistently celebrate whatever strides that have been
                          achieved in the march of Pan Africans towards
                          sustainable accomplishment by the presentation of the
                          Annual Global Peace Awards, to serve as veritable
                          motivation for youths to continue to progress
                          satisfactorily on all fronts on the global terrain
                        </p>
                        <p className="mb-2">
                          Consequently, other objective of APFAC are:
                        </p>
                        <ul className="list-disc mx-8 mb-2">
                          <li>
                            Establish a well-organized, well-resourced and
                            properly promoted Afrika Peace festival of Arts and
                            Culture.
                          </li>
                          <li>
                            Use the festival as a catalyst for social and
                            economic advancement of Pan-Africanism.
                          </li>
                          <li>
                            Provide an opportunity and a platform for
                            Pan-African youths to express themselves to the
                            local and international media and the general public
                            in the manner that will make them proud of their
                            past and prepare them towards a greater and better
                            future as a people with common heritage.
                          </li>
                          <li>
                            Create cohesion between the Art industry, Government
                            and Private Sectors; harmonizing tribes, cultures
                            and languages.
                          </li>
                          <li>
                            The proceed gain from the festival (Afrika Peace
                            Festival of Arts and Culture) which is 501c non
                            profit and non partisan Pan African group will be
                            put to a sustainable community programme for African
                            communities.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-68 bg-white justify-center overflow-hidden shadow-lg">
                <div className="mx-12 py-4">
                  <div>
                    <div className="mb-4">
                      <p className="font-semibold uppercase text-sm sm:text-lg lg:text-lg mb-1">
                        history
                      </p>
                      <div className="border-2 border-red-600 w-16"></div>
                    </div>
                    <div>
                      <Frame />
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
                      <Frame />
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
                      <Frame />
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
