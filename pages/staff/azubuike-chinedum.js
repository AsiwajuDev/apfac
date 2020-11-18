import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import axios from "axios";
import MDReactComponent from "markdown-react-js";

const Azubuike = ({ azubuike, aboutWidget }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Azubuike Chinedum `}</title>
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
                    {azubuike.header}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull={azubuike.image}
                      />
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <MDReactComponent text={azubuike.body} />
                      </div>
                      {/* <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <p className="mb-2">
                          He is a versatile arts and culture specialist who has
                          experienced both in arts, tourism and culture spanning
                          over decades with major emphasis in community
                          development.
                        </p>
                        <p className="mb-2">His experience includes:</p>
                        <ul className="list-disc mx-8 mb-2">
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
                        <p className="mb-2">He is married with children.</p>
                      </div> */}
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
};

// Azubuike.getInitialProps = async () => {
export async function getStaticProps() {
  const url = `https://usapfac-admin.herokuapp.com/staff-details`;
  const urls = `https://usapfac-admin.herokuapp.com/about-widgets`;
  const res = await axios.get(url);
  const data = res.data;

  const res1 = await axios.get(urls);
  const datas = res1.data;

  return {
    props: { azubuike: data[1], aboutWidget: datas },
  };
}

export default Azubuike;
