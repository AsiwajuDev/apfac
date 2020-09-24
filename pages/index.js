import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import Frame from "../components/frame";

export default function Index() {
  return (
    
      
    <Layout imageUrl={{ backgroundImage: "url(/favicon/header.jpg)" }}>
    
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/home-bg.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4">
                <div className="mx-6 mb-6">
                  <p className="capitalize text-white font-bold text-xl">
                    our story
                  </p>
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    we're good
                    <br /> together
                  </p>
                </div>
                <div className="border-l-4 border-red-600 px-4">
                  <div className="rounded max-w-sm lg:max-w-md bg-white overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <div className="text-green-400 font-semibold text-sm sm:text-lg lg:text-lg mb-2">
                        A Substainable Goal to Grow Together
                      </div>
                      <p className="text-gray-800 text-sm text-justify lg:text-base leading-tight">
                        <span className="text-5xl font-semibold initial-letter">
                          O
                        </span>
                        ne of the pre-eminent objectives of APFAC is to
                        consistently celebrate whatever strides that have been
                        achieved in the march of Pan Africans towards
                        sustainable accomplishment by the presentation of the
                        Annual Global Peace Awards, to serve as veritable
                        motivation for youths to continue to progress
                        satisfactorily on all fronts on the global terrain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-56 bg-white overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <p className="mb-4">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Recent Posts
                    </div>
                    <div className="border-2 border-red-600 w-16"></div>
                  </p>

                  <div>
                    <Frame
                      media="/favicon/media1.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                    />
                    <Frame
                      media="/favicon/media2.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                    />
                    <Frame
                      media="/favicon/media3.jpg"
                      className="mt-3 mb-1 h-24  w-48 lg:w-40"
                    />
                  </div>
                  <p className="mb-4">
                    <div className="capitalize font-bold text-sm sm:text-lg lg:text-lg mb-1">
                      Category
                    </div>
                  </p>
                  <div>{/* <Frame media="/favicon/media1.jpg" /> */}</div>
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
