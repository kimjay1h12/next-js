import { Typography } from "@mui/material";
import Head from "next/head";
import Toolbar from "../navbar/Toolbar";
function Mainlayout() {
  return (
    <div>
      <Head> 
        <title>Foodwest</title>
        <meta name="description" content="Developed by kimjay" />
      </Head>
      <Toolbar />
     
    </div>
  );
}

export default Mainlayout;
