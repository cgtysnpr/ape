import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Bangers"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Poppins"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
