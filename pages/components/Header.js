import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import React from "react";
import Animator from '../components/Animator'
const img2 = "/img/headerLogo2.jpg";
const useStyles = makeStyles({
  root: {
    "& .MuiTypography-h2": {
      color: "#fff",
      fontWeight: "900",
      marginTop: 10,
      fontSize: 60,
      ["@media (min-width:1200px)"]: {
        color: "#fff",
        fontWeight: "900",
        marginTop: 10,
        fontSize: 100,
      },
    },

    "& .MuiGrid-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",

      backgroundImage: `url('${img2}')`,
      backgroundSize: "150% 100%",
      backgroundRepeat: "no-repeat",
      minHeight: "650px",
      width: "100%",
      ["@media (min-width:1200px)"]: {
        backgroundImage: `url('${img2}')`,
        backgroundSize: "cover",
        minHeight: "680px",
        width: "100%",
      },
    },
  },

  display: "flex",
  alignItems: "center",
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
      <Animator variant="slide" direction="right" delay={800} timeout={1000}>
        <Grid paddingLeft="10vw" xs={7}>
          <Typography
            color="#fff"
            fontSize="30px"
            fontWeight="700"
            bgcolor="#f90"
            width="135px"
          >
            Foodwest{" "}
          </Typography>
          <Typography variant="h2">FAST FOOD FAST DELIVERY</Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius:"none",
              background: "#f90",
              color: "white",
              width: "150px",
              marginTop: 1,
            }}
          >
            Our Menu
          </Button>
        </Grid>
        </Animator>
      </Grid>
    </div>
  );
}

export default Header;
