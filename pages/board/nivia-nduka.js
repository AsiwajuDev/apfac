import Head from "next/head";
import Layout from "../../components/layout";
import { SITE_NAME } from "../../lib/constants";
import Frame from "../../components/frame";
import ImageFrame from "../../components/imageFrame";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Nivia() {
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
                    {/* {!header || header.title.rendered} */} Nivia Nduka
                    (Afrikan Simba)
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-3xl bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <ImageFrame
                        className="w-64 h-64 mb-3"
                        imageFull="/about/nadia.jpeg"
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
                          He is a highly energetic, experienced and creative
                          personality, Afrikan Simba, essentially a storyteller,
                          immersed himself in musical performance from the
                          tender age of 10, getting involved with local sound
                          systems.
                        </p>
                        <p className="mb-2">
                          In 1990 he started studio recording with Dub Jockey
                          Studios, yielding his first release in 1992, a track
                          entitled Give Thanks. Since then he has relentlessly,
                          to this day, continued recoding and performing
                          internationally, in major events and festivals, most
                          times headlining, across, Europe, Africa, the
                          Caribbean, S. America and the Middle East.
                        </p>
                        <p className="mb-2">
                          In 2004 he gained a BA Hons degree in Content Creation
                          for Broadcasting and New Media, Simba in 2005 joined
                          Voice Of Africa Radio as a technical advisor and
                          trainer and later became manager. Voice of Africa
                          Radio had a temporary 5yr licence to broadcast,
                          becoming Africa's only licensed radio station in
                          Europe.
                        </p>
                        <p className="mb-2">
                          In 2012/13 he furthered his education gaining a Post
                          Graduate Certificate in Education and then, whilst
                          continuing to perform and record as usual, held
                          positions of Lecturer of Media Studies at Westminster
                          Kingsway College, Kings Cross, London UK and Harlow
                          College UK.
                        </p>
                        <p className="mb-2">
                          Furthermore, he obtained other experiences in Project
                          management for Ayamba, Reality Shock and Sirius record
                          labels duties including origination of project, event
                          planning and co-ordination, co-ordinating with
                          mastering/design and distribution teams, etc. and also
                          was the Originator and Curator-in-chief of the hugely
                          successful annual Goodly Words Cultural Winter.
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
                         */}
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
