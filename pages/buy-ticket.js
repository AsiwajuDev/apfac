import Head from "next/head";
import StripeCheckout from "react-stripe-checkout";
import fetch from "isomorphic-unfetch";
import PayPalButtons from "../components/paypal/paypayImports";
import axios from "axios";

import Layout from "../components/layout";
import { SITE_NAME } from "../lib/constants";
import InputField from "../components/InputField";
import Button from "../components/button";
import { useState } from "react";

const BuyTicket = ({ assets }) => {
  const [showPayPal, setShowPayPal] = useState(false);

  const showPayPalButton = () => {
    setShowPayPal(true);
  };

  const onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  const price = 200 * 100;

  return (
    <Layout imageUrl={{ backgroundImage: `url(${assets.headerImage})` }}>
      <Head>
        <title>{`${SITE_NAME} - Buy Ticket `}</title>
      </Head>
      <div>
        <div
          className="bg-cover bg-no-repeat bg-top pt-12 pb-20"
          style={{
            backgroundImage: `url(${assets.bodyImage})`,
            height: 500,
          }}
        >
          <div className="container px-5 lg:mx-auto">
            <div className="flex flex-wrap mr-4 justify-center md:justify-between md:mx-4 lg:mx-0">
              <div className="mb-4 mx-6">
                <div className="">
                  <p className="text-white text-6xl leading-none sm:text-7xl font-bold pb-4">
                    Get your
                    <br />
                    tickets
                  </p>
                </div>

                <div className="max-w-sm sm:max-w-md bg-opacity-50 z-10 py-2 text-white rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    {/* {showPayPal ? (
                      <PayPalButtons />
                    ) : (
                      <Button
                        buttonText="buy ticket"
                        onClick={showPayPalButton}
                        className="w-full uppercase bg-red-600 py-3 text-center text-white font-semibold"
                      />
                    )} */}

                    <StripeCheckout
                      ComponentClass="div"
                      token={onToken}
                      stripeKey="pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb"
                      label="Pay Now"
                      name="apfac"
                      billingAddress
                      shippingAddress
                      image="/favicon/logo.png"
                      description={`Your total is ${price}`}
                      amount={price}
                      panelLabel="Pay Now"
                    >
                      <Button
                        buttonText="buy ticket"
                        className="w-full uppercase bg-red-600 py-3 text-center text-white font-semibold"
                      />
                    </StripeCheckout>
                  </div>
                </div>
              </div>
              <div className="hidden md:block rounded w-64 justify-center overflow-hidden shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const url1 = `https://usapfac-admin.herokuapp.com/background-images`;
  const res2 = await axios.get(url1);
  const data1 = res2.data;

  return {
    props: { assets: data1[36] },
  };
}

export default BuyTicket;
