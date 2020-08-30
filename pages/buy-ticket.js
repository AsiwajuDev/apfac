import Head from "next/head";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import InputField from "../components/InputField";
import Button from "../components/button";

export default function BuyTicket() {
  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/about-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/ticket-banner.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4 mx-6">
                <div className="">
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    get your
                    <br />
                    tickets
                  </p>
                </div>

                <div className="max-w-sm sm:max-w-md bg-black bg-opacity-50 z-10 py-2 text-white rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                          <label
                            className="block capitalize tracking-wide text-white text-xs font-semibold mb-2"
                            for="grid-first-name"
                          >
                            Name
                          </label>
                          <InputField
                            className="appearance-none block w-full text-gray-700 bg-black bg-opacity-50 border border-gray-200 opacity-50 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            id="grid-first-name"
                            type="text"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block capitalize tracking-wide text-white text-xs font-semibold mb-2">
                            Email
                          </label>
                          <InputField
                            className="appearance-none block w-full bg-black bg-opacity-50 border border-gray-200 opacity-50 text-gray-700 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                          <label className="block capitalize tracking-wide text-white text-xs font-semibold mb-2">
                            Address
                          </label>
                          <InputField
                            className="appearance-none block w-full text-gray-700 bg-black bg-opacity-50 border border-gray-200 opacity-50 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            type="text"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block capitalize tracking-wide text-white text-xs font-semibold mb-2"
                            for="grid-last-name"
                          >
                            City
                          </label>
                          <InputField
                            className="appearance-none block w-full bg-black bg-opacity-50 border border-gray-200 opacity-50 text-gray-700 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            id="grid-last-name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                          <label className="block capitalize tracking-wide text-white text-xs font-semibold mb-2">
                            State
                          </label>
                          <InputField
                            className="appearance-none block w-full text-gray-700 bg-black bg-opacity-50 border border-gray-200 opacity-50 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            type="text"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block capitalize tracking-wide text-white text-xs font-semibold mb-2"
                            for="grid-last-name"
                          >
                            Zip Code
                          </label>
                          <InputField
                            className="appearance-none block w-full bg-black bg-opacity-50 border border-gray-200 opacity-50 text-gray-700 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            id="grid-last-name"
                            type="text"
                          />
                        </div>
                      </div>
                      <Button
                        buttonText="buy ticket"
                        className="w-full uppercase bg-red-600 py-3 text-center text-white font-semibold"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-64 justify-center overflow-hidden shadow-lg"></div>
              {/* <div className="justify-end"></div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
