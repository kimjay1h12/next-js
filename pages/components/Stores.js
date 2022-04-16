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
      height: "400px",
      ["@media (min-width:1200px)"]: {
        width: "300px",
        height: "500px",
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
        <Grid container key={index}>
          <img src={cur.url} />
          <Typography variant="h6">{cur.title}</Typography>
          <Typography>{cur.price}</Typography>
          <Button variant="outlined">{cur.button}</Button>
        </Grid>
      ))}
    </div>
  );
}

export default Stores;
