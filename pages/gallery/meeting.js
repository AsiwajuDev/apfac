import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import Card from "../../components/card";
import axios from "axios";

const Meeting = ({ meetings }) => {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/gallery-header.jpg)" }}>
      <Head>
        <title>{`${SITE_NAME} - Meeting `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-32 pb-2"
          style={{ backgroundImage: "url(/favicon/gallery.jpg)" }}
        >
          <div className="container lg:mx-auto">
            <div className="sm:mx-20 md:mx-4 lg:mx-0">
              <div className="mx-4">
                <p className="capitalize text-white font-semibold text-2xl">
                  Gallery
                </p>
                <p className="text-white text-5xl leading-none sm:text-7xl font-bold pb-4">
                  africa alive!
                </p>
              </div>
              <div className="mb-10 mx-6">
                <div className="col-span-12 mt-8">
                  <div className="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
                    {meetings.map((meeting, id) => {
                      return (
                        <Card
                          key={id}
                          cardTitle={meeting.galleryWidgetHeader}
                          mediaTitle={meeting.galleryWidgetTitle}
                          media={meeting.galleryWidgetImage}
                          mediaUrl="gallery/1st-edition-pictures/gallery"
                        />
                      );
                    })}
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

Meeting.getInitialProps = async () => {
  const url = "https://usapfac-admin.herokuapp.com/experience-widgets";
  const res = await axios.get(url);
  const data = res.data;

  return { meetings: data };
};

export default Meeting;
