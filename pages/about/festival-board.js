import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import CardFrame from "../../components/cardFrame";
import axios from "axios";

const FestivalBoard = ({ boards, assets }) => {
  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Board `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top py-12"
          style={{ backgroundImage: `url(${assets.bodyImage})` }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="flex justify-center">
                <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                  directors
                </p>
              </div>
              <div className="mb-10 sm:mx-6 flex justify-center">
                <div className="col-span-9 mt-8">
                  <div className="grid grid-cols-12 sm:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 mt-5">
                    {boards.map((board, id) => {
                      return (
                        <CardFrame
                          key={id}
                          image={board.imageURL}
                          bgColor="bg-white"
                          imageTitle={board.name}
                          imageBody={board.position}
                          pageUrl={board.boardUrl}
                        />
                      );
                    })}
                    {/* <CardFrame
                      image="/about/PATRICK-DURODOLA.png"
                      bgColor="bg-white"
                      imageTitle="Patrick Durodola"
                      imageBody="Director"
                      pageUrl="board/patrick-durodola"
                    />
                    <CardFrame
                      image="/about/AZUBUIKE-CHINEDUM-OKORONKWO.png"
                      bgColor="bg-white"
                      imageTitle="Azubuike Okoronkwo"
                      imageBody="Director"
                      pageUrl="board/azubuike-chinedum"
                    />
                    <CardFrame
                      image="/about/FRANCHESSKA.jpeg"
                      bgColor="bg-white"
                      imageTitle="Franchesska Berry"
                      imageBody="Director"
                      pageUrl="board/franchesska-berry"
                    />
                    <CardFrame
                      image="/about/nadia.jpeg"
                      bgColor="bg-white"
                      imageTitle="Nivia Nduka"
                      imageBody="Director"
                      pageUrl="board/nivia-nduka"
                    />
                    <CardFrame
                      image="/about/MWALIMU KABAILA.jpeg"
                      bgColor="bg-white"
                      imageTitle="Mwalimu Kabaila"
                      imageBody="Director"
                      pageUrl="board/mwalimu-kabaila"
                    /> */}
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

export async function getStaticProps() {
  const url = "https://usapfac-admin.herokuapp.com/boards";
  const res = await axios.get(url);
  const data = res.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { boards: data, assets: data1[7] },
  };
}

export default FestivalBoard;
