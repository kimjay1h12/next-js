import Header from "./components/Header";
import Mainlayout from "./components/Mainlayout";
import Section from './components/Section'
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
export default function Home(){
  return(
   <div>
        
     <Mainlayout/>
<Header/>
<Section/>
    </div>
    

  )
}