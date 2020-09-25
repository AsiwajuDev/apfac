import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import InputField from "../components/InputField";
import InputTextArea from "../components/inputTextArea";
import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";

export default function Contact() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout imageUrl={{ backgroundImage: "url(/favicon/contact-header.jpg)" }}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{ backgroundImage: "url(/favicon/contact.jpg)" }}
        >
          <div className="container px-5 lg:mx-auto">
            <div>
              <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
                <div className="mb-4">
                  <div className="mx-6 mb-6">
                    <p className="text-white font-bold text-xl">apfac group</p>
                    <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                      contact us
                    </p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2">
                <div className="max-w-md sm:max-w-3xl bg-white bg-opacity-75 z-10 py-2 text-black rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <form className="w-full">
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                          <label
                            className="block capitalize tracking-wide text-black text-xs font-semibold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Name
                          </label>
                          <InputField
                            className="block w-full border border-black text-black rounded p-2 leading-tight"
                            id="grid-first-name"
                            type="text"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                          <label className="block capitalize tracking-wide text-black text-xs font-semibold mb-2">
                            Email
                          </label>
                          <InputField
                            className="block w-full border border-black text-black rounded p-2 leading-tight"
                            type="email"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                          <label className="block capitalize tracking-wide text-xs text-black font-semibold mb-2">
                            Subject
                          </label>
                          <InputField
                            className="block w-full border border-black text-black rounded p-2 leading-tight"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                          <label
                            className="block capitalize tracking-wide text-black text-xs font-semibold mb-2"
                            htmlFor="grid-last-name"
                          >
                            Message
                          </label>
                          <InputTextArea
                            className="h-48 block w-full border border-black text-black rounded p-2 leading-tight"
                            id="grid-last-name"
                            type="text"
                          />
                        </div>
                      </div>

                      <Button
                        buttonText="send"
                        onSubmit={onSubmit}
                        className="uppercase rounded-sm w-40 bg-red-600 py-3 text-center text-white font-semibold"
                      />
                      {/* <div className="flex flex-wrap -mx-3 mb-3">
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
                            htmlFor="grid-last-name"
                          >
                            Zip Code
                          </label>
                          <InputField
                            className="appearance-none block w-full bg-black bg-opacity-50 border border-gray-200 opacity-50 text-gray-700 rounded p-2 leading-tight focus:outline-none focus:bg-black"
                            id="grid-last-name"
                            type="text"
                          />
                        </div>
                      </div> */}
                    </form>
                  </div>
                </div>
                <div className="text-white mx-auto mt-5">
                  <div className="mb-5">
                    <label className="block text-3xl">Email</label>
                    <a
                      href="mailto:info@usapfac.org"
                      className="text-white text-lg"
                    >
                      info@usapfac.org
                    </a>
                  </div>
                  <div>
                    <label className="block text-3xl">Phone</label>
                    <a href="tel:+678 887 7619" className="text-white text-lg">
                      +678 887 7619
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
