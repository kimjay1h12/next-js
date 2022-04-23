import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
const useStyles = makeStyles({
  root: {
    "& .MuiButton-root": {
      width: "150px",
      alignItems: "center",
      textAlign: "center",
      lineHeight: "1",
      color: "#f90",
      margin: "10px",

      background: "#fff",
    },
    "& .MuiGrid-item": {
      width: "100%",

      textAlign: "center",
      ["@media (min-width:1200px)"]: {
        width: "500px",

        textAlign: "start",
      },
    },
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "column",

      ["@media (min-width:1200px)"]: {
        flexDirection: "row",
      },
    },
    "& img": {
      width: "300px",
      height: "300px",
      marginTop: "30px",
      textAlign: "center",

      ["@media (min-width:1200px)"]: {
        width: "100%",
        height: "600px",
        marginTop: "-30%",
      },
    },
    marginTop: "100px",
    background: "#f90",
    ["@media (min-width:1200px)"]: {
      marginTop: "160px",
    },
  },
});
function Location() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Typography variant="h3" color="#fff" sx={{ fontWeight: "700" }}>
            Order Food
          </Typography>
          <Typography
            color="#fff"
            variant="h6"
            sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
          >
            The Food west app makes it simple and stressfree for anybody to use
            a mobile device to look over the menu of the best vendors and place
            an order for home delivery.
          </Typography>
          <Button>
            <AppleIcon />
            Download on app store
          </Button>
          <Button>
            <AndroidIcon />
            Download on Play store
          </Button>
        </Grid>
        <Grid item>
          <img src="/img/mobile.png" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Location;
