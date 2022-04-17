import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Countdown from "react-countdown";
import ReactDOM from "react-dom";
const background = "/img/background3.jpg";
const Completionist = () => (
  <span style={{ fontSize: "80px", color: "white" }}>Offer Closed</span>
);
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};
const useStyles = makeStyles({
  root: {
    "& span": {
      fontSize: "98px",
      background: "#f90",
      width: "300px",
      display: "flex",
      color: "white",
      marginTop: "20px",
      justifyContent: "space-around",
    },
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height: "500px",
    justifyContent: "center",
    backgroundImage: `url('${background}')`,
    backgroundSize: "cover",
    marginTop: "100px",
  },
});
function Timer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h4" sx={{fontWeight:"700"}} color="#f90">
          Deal Of The Day
        </Typography>
        <Countdown date={Date.now() + 600000} renderer={renderer} />
        <Typography variant="h6" color="#f90" sx={{marginTop:"20px"}} >FREE PIZZA DIABLO WITH HOUR NEXT ONLINE ORDER</Typography>
      </Grid>
    </div>
  );
}

export default Timer;
