import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "flex-start",

      flexDirection: "column",
      width: "300px",
      height: "300px",
      ["@media (min-width:1200px)"]: {
        width: "400px",
        height: "500px",
      },
    },
    "& img": {
      width: "200px",
      height: "200px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
      ["@media (min-width:1200px)"]: {
        width: "300px",
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
  },
  {
    url: "/img/img1.jpg",
    title: "Cheese & Barbeque Chicken",
    price: "$80.00",
    button: "ADD TO CART",
  },
  {
    url: "/img/img3.jpg",
    title: "Cheese & Barbeque Chicken",
    price: "$80.00",
    button: "ADD TO CART",
  },
  {
    url: "/img/img4.jpg",
    title: "Cheese & Barbeque Chicken",
    price: "$80.00",
    button: "ADD TO CART",
  },
];
function Stores() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {content.map((cur, index) => (
        <Grid container key={index} >
          <img src={cur.url} key={index} />
          <Typography variant="h6" key={index} >{cur.title}</Typography>
          <Typography key={index} >{cur.price}</Typography>
          <Button key={index} >{cur.button}</Button>
        </Grid>
      ))}
    </div>
  );
}

export default Stores;
