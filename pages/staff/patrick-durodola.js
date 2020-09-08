import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Patrick() {
  const [header, setHeader] = useState();
  //   let url = "https://test.usapfac.org/wp-json/wp/v2/pages/2";

  //   const getData = async () => {
  //     // let url = "https://test.usapfac.org/wp-json/wp/v2/posts/11";
  //     const response = await axios.get(url);
  //     // console.log(response.data.title);

  //     setHeader(response.data);
  //   };

  useEffect(() => {
    async function fetchData() {
      let url = "https://test.usapfac.org/wp-json/wp/v2/pages/2";
      let result;
      try {
        const res = await fetch(url);
        result = await res.json();
        // console.log(result);
      } catch (err) {
        console.log("Error", err);
        result = [];
      }
      //   return {
      //     result: result,
      //   };

      setHeader(result);
    }
    fetchData();
  }, []);

  //   console.log(header);

  //   useEffect(() => {
  //     // getData();
  //     getInitialProps();
  //   }, []);

  // Resolve promise and set initial props.
  //   async function getInitialProps() {
  //     // Make request for posts.
  //     const response = await axios.get(url);

  //     // Return response to posts object in props.
  //     return {
  //       posts: response.data,
  //     };
  //   }

  //   console.log(header);
  //   const { title, content } = header;
  //   console.log(content);
  //   console.log(header.title);
  //   console.log();

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
          <div className="container px-2 sm:px-5 lg:mx-auto">
            <div className="flex flex-wrap justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6">
                  <p className="text-white text-4xl leading-none sm:text-5xl font-bold pb-4">
                    {/* {!header || header.title.rendered} */} Patrick Durodola
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull="/about/PATRICK-DURODOLA.png"
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
                        <p className="mb-2">He is married with children.</p>
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
                      <Frame media="/favicon/about1.jpg" />
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
                      <Frame media="/favicon/about1.jpg" />
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
                      <Frame media="/favicon/about3.jpg" />
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
