import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ["@media (min-width:1200px)"]: {
      flexDirection: "column",
    },
  },
  section: {
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "flex-start",
      flexDirection: "column",
      width: "300px",
      height: "400px",
      ["@media (min-width:1200px)"]: {
        width: "250px",
        height: "500px",
        margin:"40px"
      },
    },
    "& 	.MuiButton-outlined": {
      background: "#f90",
      color: "white",
      marginTop: "10px",
    },
    "& img": {
      width: "200px",
      height: "200px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      ["@media (min-width:1200px)"]: {
        width: "3m 00px",
        height: "300px",
      },
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ["@media (min-width:1200px)"]: {
      flexDirection: "row",
    },
  },
});

const content = [
  {
    url: "/img/cheese.jpg",
    title: "Cheese & Barbeque Chicken",
    price: "$80.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img1");
    },
  },
  {
    url: "/img/img1.jpg",
    title: "5 Pepper",
    price: "$20.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img2");
    },
  },
  {
    url: "/img/img3.jpg",
    title: "Chicken Nugget",
    price: "$10.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img3");
    },
  },
  {
    url: "/img/img4.jpg",
    title: "California Roll",
    price: "$80.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img4");
    },
  },
];
const content2 = [
  {
    url: "/img/img5.jpg",
    title: "HandBurger",
    price: "$80.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img1");
    },
  },
  {
    url: "/img/img6.jpg",
    title: "Kebeb",
    price: "$80.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img2");
    },
  },
  {
    url: "/img/img7.jpg",
    title: "HotDog",
    price: "$80.00",
    button: "ADD TO CART",
    click: function Click() {
      const setI = i + 1;
    },
  },
  {
    url: "/img/img8.jpg",
    title: "Burger Builder",
    price: "$70.00",
    button: "ADD TO CART",
    click: function Click() {
      alert("you clicked on img4");
    },
  },
];
function Stores() {
  const classes = useStyles();
  const [i, setI] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        {content.map((cur, index) => (
          <Grid container key={index}>
            <img src={cur.url} />
            <Typography variant="h6" style={{ color: "#f90" }}>
              {cur.title}
            </Typography>

            <Typography style={{ color: "#f90" }}>{cur.price}</Typography>
            <Button variant="outlined" onClick={cur.click}>
              {cur.button}
            </Button>
          </Grid>
        ))}
      </div>
      <div className={classes.section}>
        {content2.map((cur, index) => (
          <Grid container key={index}>
            <img src={cur.url} />
            <Typography variant="h6" style={{ color: "#f90" }}>
              {cur.title}
            </Typography>

            <Typography style={{ color: "#f90" }}>{cur.price}</Typography>
            <Button variant="outlined" onClick={cur.click}>
              {cur.button}
            </Button>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default Stores;
