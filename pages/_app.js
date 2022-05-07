import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
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
