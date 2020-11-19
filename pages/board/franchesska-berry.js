import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import axios from "axios";
import MDReactComponent from "markdown-react-js";

export default function Berry({ franchesska, aboutWidget,assets }) {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Franchesska Berry `}</title>
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
                    {franchesska.header}
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull={franchesska.image}
                      />
                      <div className="text-gray-800 text-sm sm:text-base text-justify">
                        <MDReactComponent text={franchesska.body} />

                        {/* <p className="mb-2">
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
                        </p> */}
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
    props: { franchesska: data[2], aboutWidget: datas, assets: data1[42] },
  };
}
