import { Typography } from "@mui/material";
import Head from "next/head";
import Toolbar from "../Toolbar";
function Mainlayout() {
  const title = "Foodwest"
  return (
    <div>
      <Head> 
        
       
        <title> {title} | Foodwest</title>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            "welcome to the best food ordering website "
          }
        />
    
        <meta name="description" content="Developed by kimjay" />
      </Head>
      <Toolbar />
     
    </div>
  );
}

export default Mainlayout;
