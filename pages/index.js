import Header from "./components/Header";
import Mainlayout from "./components/Mainlayout";
import Section from "./components/Section";
import Head from "next/head";
import Stores from "./components/Stores";
import CssBaseline from "@mui/material/CssBaseline";

import Timer from "./components/Timer";
import Message from "./components/Message";
import Map from "./components/Location";
import Location from "./components/Location";
import End from "./components/End";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodwest</title>
        <meta property="og:url" content="foodwest.vercel.app" />
        <meta property="og:type" content="Foodwest" />
        <meta property="fb:app_id" content="Foodwest" />
        <meta property="og:title" content="Welcome to Foodwest" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content="https://foodwest.vercel.app/img/logo.png"
        />
        <meta property="og:image:width" content="1200"/>

<meta property="og:image:height" content="630"/>
        <meta
          property="og:description"
          content="You order, we do the rest for you"
        />
       
      </Head>
      <Mainlayout />
      <Header />
      <Section />
      <Stores/>
      <Timer/>
      <Message/>
      <Location/>
      <End/>
   
    </div>
  );
}
