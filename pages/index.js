import Header from "./components/Header";
import Mainlayout from "./components/Mainlayout";
import Section from "./components/Section";
import Head from "next/head";
import Stores from "./components/Stores";
import CssBaseline from "@mui/material/CssBaseline";
import {UserContextProvider} from './components/UserContent'
import Timer from "./components/Timer";
import Message from "./components/Message";

import Download from "./components/Download";
import End from "./components/End";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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
    
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Header />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Section />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Stores/>
      
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Timer/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Message/>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <Download/>
      </AnimationOnScroll>
  
      <AnimationOnScroll animateIn="animate__bounceIn">
      <End/>
      </AnimationOnScroll>
   
    </div>
  );
}
