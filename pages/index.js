import Head from "next/head";
import Navbar from "../components/Navbar";
function index() {
  return (
    <div>
      <Head>
        <title>EcoVision</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg.png"></link>
      </Head>
      <Navbar />
      
    </div>
  );
}

export default index;
