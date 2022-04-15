import { Typography } from "@mui/material";
import Head from "next/head";
import Toolbar from "./Toolbar";
function Mainlayout( ) {
  
  return (
    <div>
           <Head>
          
        <title>
          Foodwest
        </title>
        <meta property="og:url" content="foodwest.vercel.app" />
        <meta property="og:type" content="Foodwest" />
        <meta property="fb:app_id" content="Foodwest" />
        <meta
          property="og:title"
          content="Welcome to Foodwest"
          
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="You order, we do the rest for you"
        />
         <meta property="og:image" content="https://foodwest.vercel.app/img/cheese.jpg"/>
        </Head> 
    </div>
  );
}

export default Mainlayout;
