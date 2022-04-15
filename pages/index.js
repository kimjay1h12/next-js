import Header from "./components/Header";
import Mainlayout from "./components/Mainlayout";
import Section from './components/Section'
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
export default function Home(){
  return(
   <div>
           <Head>
          <meta name="theme-color" content="#fff" />
          <link href="/manifest.json" rel="manifest" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta property="og:image" content="/img/pizza.jpg" />
          <link rel="shortcut icon" href="/img/pizza.jpg"/>
          <meta
            name="google-site-verification"
            content="LnYh0UQt4hnAaDsFGORlZ9p50zKahbAMOJD9cKGCIGQ"
          />
        </Head>
     <Mainlayout/>
<Header/>
<Section/>
    </div>
    

  )
}