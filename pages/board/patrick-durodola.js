import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import axios from "axios";
import MDReactComponent from "markdown-react-js";

export default function Patrick({ patrick, aboutWidget, assets }) {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Patrick Durodola `}</title>
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
                    {patrick.header}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull={patrick.image}
                      />
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <MDReactComponent text={patrick.body} />
                        {/* <p className="mb-2">
                          He is a seasoned banker, an enthusiastic and dynamic
                          Individual with a wealth of experience spanning
                          African Retail Banking Services, Investment banking,
                          Public Sector, E-banking services, (ATM & POS,
                          Internet, Mobile Banking Operations, Card services
                          etc) in a World/African proven organisation such as
                          Eco Bank transnational incorporated, First Bank of
                          Nigeria Plc, Union Bank of Nigeria Plc and Financial
                          Institution Training Centre.
                        </p>
                        <p className="mb-2">
                          He obtained both Bachelor of Science and Masters of
                          Science Degree in computer science from University of
                          Ibadan, Ibadan, Nigeria, Masters in Business
                          Administration from Ladoke Akintola University Tech.
                          Ogbomoso. All in Oyo State, Nigeria.
                        </p>
                        <p className="mb-2">
                          An erudite scholar, he now proceed to add to his
                          knowledge, by obtaining the following professional
                          degrees
                        </p>
                        <ul className="list-disc mx-8 mb-2">
                          <li>
                            Associate Member Computer Association of Nigeria.
                          </li>
                          <li>Member Chartered Institute of Bankers</li>
                          <li>
                            Member, Certified Information Security Managers
                            (CISM- ISACA)
                          </li>
                          <li>
                            Associate Member Institute of Capital Market
                            Registrars
                          </li>
                          <li>
                            Member African Business Panel (The Largest Pan
                            African online Market Research Panel- Where Market
                            Research is shared among members and can be used as
                            a benchmark for all African business enterprise and
                            also relevant business leads are received by members
                            to aid business decisions.
                          </li>
                          <li>Member Lagos Business Club</li>
                          <li>
                            Metropolitan School of Business Management UAE-
                            Dubai
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
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
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
    props: { patrick: data[0], aboutWidget: datas, assets: data1[40] },
  };
}
