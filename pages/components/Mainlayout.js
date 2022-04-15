import { Typography } from "@mui/material";
import Head from "next/head";
import Toolbar from "./Toolbar";
function Mainlayout() {
  return (
    <div>
      <Head>
        <meta
          property="og:image"
          content="https://img.resized.co/98fm/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMDlcXFwvMjUxMzM2MTBcXFwvaGFtYnVyZ2VyLmpwZ1wiLFwid2lkdGhcIjo5NzAsXCJoZWlnaHRcIjo0ODUsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy45OGZtLmNvbVxcXC9pbWFnZXNcXFwvbm9faW1hZ2UucG5nXCJ9IiwiaGFzaCI6ImMxMDE1NWM5MmU4NTVhNjc1NzllNzZiYjNlZmQzMmFhZmYyODIwNjAifQ==/blonde-moments-i-thought-a-hamburger-was-called-a-handburger-for-years.jpg"
        />
        <title>Foodwest</title>
        <meta property="og:url" content="foodwest.vercel.app" />
        <meta property="og:type" content="Foodwest" />
        <meta property="fb:app_id" content="Foodwest" />
        <meta property="og:title" content="Welcome to Foodwest" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Welcome to Foodwest" />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>

      <Toolbar />
    </div>
  );
}

export default Mainlayout;
