import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { SITE_NAME } from "../../../lib/constants";
import axios from "axios";

const MeetingGalleryImage = ({ assets, resources }) => {
  const router = useRouter();

  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - 1st Edition Pictures Gallery `}</title>
      </Head>
      <div>
        <div className="bg-cover bg-no-repeat bg-top pt-32 pb-2 bg-gray-800">
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="flex justify-between mx-4">
                <div className="">
                  <p className="capitalize text-white font-semibold text-2xl">
                    Gallery
                  </p>
                  <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                    africa alive!
                  </p>
                </div>
                <div onClick={() => router.back()}>
                  <span className="capitalize cursor-pointer hover:text-red-600 text-base text-white italic sm:text-2xl">
                    <i class="fa fa-chevron-left"></i>
                    <span className="px-2">Back</span>
                  </span>
                </div>
              </div>
              <div className="mb-10 mx-6">
                <div class="grid gap-5 grid-cols-1 md:grid-cols-3">
                  {resources.map((resource, id) => {
                    return (
                      <div key={id}>
                        <img src={resource.image} />;
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

// MeetingGalleryImage.getInitialProps = async () => {
export async function getServerSideProps() {
  // const url = `https://res.cloudinary.com/dxwzdkhyb/image/list/1stedition.json`;
  // const res = await fetcher(url);
  const url = `https://usapfac-admin.herokuapp.com/meeting-pictures-galleries`;
  const res = await axios.get(url);
  const data = res.data;

  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { resources: data, assets: data1[17] },
  };
}

export default MeetingGalleryImage;
