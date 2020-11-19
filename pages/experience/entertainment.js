import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import axios from "axios";
import MDReactComponent from "markdown-react-js";

const Entertainment = ({ entertainments, experience }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${experience.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Entertainment `}</title>
      </Head>
      <div>
        <div className="flex flex-wrap justify-center  md:flex-no-wrap md:justify-between lg:mx-0">
          <div className="md:w-2/6 lg:w-1/5">
            <div className="hidden md:block bg-white overflow-hidden">
              <div className="px-6 pt-20 lg:pt-8 lg:ml-8">
                {entertainments.map((environment, id) => {
                  return (
                    <div className="mb-4" key={id}>
                      <p className="mb-3">
                        <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                          {environment.sideWidgetHeader}
                        </div>
                        <div className="border-2 border-red-600 w-16"></div>
                      </p>

                      <Frame
                        mediaTitle={environment.sideWidgetTitle}
                        media={environment.sideWidgetImage}
                        className="mt-3 mb-1 h-24 w-48 lg:w-40"
                        mediaUrl="experience/1st-edition"
                      />
                    </div>
                  );
                })}
                {/* <div className="mb-4">
                  <p className="mb-3">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      2nd Edition
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>
                  <Frame
                    mediaTitle="Africa peace festival art and culture 2020"
                    media="/favicon/experience2.jpg"
                    className="mt-3 mb-1 h-24  w-48 lg:w-40"
                    mediaUrl="experience/2nd-edition"
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="md:w-4/6 lg:w-4/5">
            <div className="container lg:mx-auto">
              <div
                className="bg-cover bg-no-repeat bg-top py-32"
                style={{ backgroundImage: `url(${experience.bodyImage})` }}
              >
                <div className="container px-5 py-10 lg:mx-auto">
                  <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
                    <div className="mb-4">
                      <div className="mx-6 mb-6">
                        <p className="capitalize text-white font-bold text-xl">
                          {experience.header}
                        </p>
                        <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                          <MDReactComponent text={experience.body} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-1 xl:col-span-4">
                    <div className="mx-20">
                      <p className="capitalize text-white font-bold text-2xl">
                        Experience
                      </p>
                      <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                        watch the shows online
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2"></div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = "https://usapfac-admin.herokuapp.com/experience-widgets";
  const res = await axios.get(url);
  const data = res.data;

  const url1 = "https://usapfac-admin.herokuapp.com/experiences";
  const res1 = await axios.get(url1);
  const datas = res1.data;

  return {
    props: { entertainments: data, experience: datas[2] },
  };
}

export default Entertainment;
