import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const img = "/img/background.jpg";
const img2 = "/img/background2.jpg";
const useStyles = makeStyles({
  root: {
    "& .css-11lq3yg-MuiGrid-root": {
      justifyContent: "center",
      alignItems: "center",
      ["@media (min-width:1200px)"]: {
        justifyContent: "flex-start",
        alignItems: "center",
      },
    },
    "& .css-1kca3mp-MuiTypography-root": {
      fontSize: "60px",
      fontWeight: "700",
      textTransform: "uppercase",
      ["@media (min-width:1200px)"]: {
        marginLeft: "200px",

        fontSize: "60px",
        fontWeight: "700",
      },
    },
    ["@media (min-width:1200px)"]: {
      backgroundImage: `url('${img}')`,
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: `url('${img2}')`,
    backgroundSize: "cover",
    height: "500px",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Typography variant="h4" color="#f90">
          Let's <br />
          Get started
        </Typography>
      
      </Grid>
    </div>
  );
}

export default Header;
