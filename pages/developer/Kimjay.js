import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import End from "../components/End";
import Mainlayout from "../components/Mainlayout";

const useStyles = makeStyles({
  root: {
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      ["@media (min-width:1200px)"]: {
        flexDirection: "row",
      },
    },
   
    "& img": {
      height: "300px",
      width: "300px",
    },
    marginTop: "89px",
    background: "#f90",
  },
});
function Kimjay() {
  const classes = useStyles();
  return (
    <div>
      <Mainlayout />
      <div className={classes.root}>
        <Grid container >
          <Grid>
            <img src="/img/profile.jpg"></img>
          </Grid>
          <Grid>
            <Typography variant="h4">ABOUT ME</Typography>
            <Typography>
              Why hire me for your next project? Meet my startup design agency
              Shape Rex Currently I am working at CodeNext as Product Designer.
              Before that  worked at SpurBee, Dhaka as a UX, UI Designer. I
         
            </Typography>
          </Grid>
        </Grid>
      </div>
      <End />
    </div>
  );
}

export default Kimjay;
