import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const buider = [
  {
    title: "YOU ORDER",
    url: "/img/step1.jpg",
  },
  {
    title: "WE DELIVERY",
    url: "/img/step2.webp",
  },
  {
    title: "YOU ENJOY !!",
    url: "/img/step3.jpg",
  },
];
const useStyles = makeStyles({
  root: {
      '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root':{
background:"red",
color:"#f90",
marginTop:"20px"
      },
    "& .css-18dt0nf-MuiGrid-root": {
      width: "350px",
      height: "250px",
      color: "#fff",
      fontSize: "30px",
      margin: "10px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    ["@media (min-width:1200px)"]: {
      flexDirection: "row",
    },
  },
});
function Section() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {buider.map((cur ,index ) => (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          key={index}
          style={{
            backgroundImage: `url('${cur.url}')`,
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h4" color="#f90" style={{fontWeight:"700",}} key={index} >{cur.title}</Typography>

          <Button>Learn More</Button>
        </Grid>
      ))}
    </div>
  );
}

export default Section;
