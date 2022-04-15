import { Typography } from "@mui/material";
import Head from "next/head";
import Toolbar from "./Toolbar";
function Mainlayout( ) {
  const title = "Foodwest"
  const description = "we"
  return (
    <div>
           <Head>
        <title>
          Foodwest
        </title>
        <meta property="og:url" content="foodwest.vercel.app" />
        <meta property="og:type" content="Foodwest" />
        <meta property="fb:app_id" content="kimjay" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={"/img/cheese.jpg"} />
      </Head>
      <Toolbar />
     
    </div>
  );
}

export default Mainlayout;
