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
    "& .MuiButton-contained ": {
      background: "#f90",
      color: "white",
      width: "150px",
      height: "50px",
      marginTop: "20px",
    },
    "& .MuiGrid-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100%",
      height: "290px",
      color: "#fff",
      fontSize: "30px",
      margin: "8px",
    },
    display: "flex",
    alignItems: "center",

    flexDirection: "column",
    ["@media (min-width:1200px)"]: {
      justifyContent: "space-around",
      flexDirection: "row",
    },
  },
});
function Section() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {buider.map((cur, index) => (
        <Grid
          container
          key={index}
          sx={{
            backgroundImage: `url('${cur.url}')`,
            backgroundSize: "cover",
          }}
        >
          <Typography
            variant="h4"
            color="#f90"
            style={{ fontWeight: "700" }}
            key={index}
          >
            {cur.title}
          </Typography>

          <Button variant="contained">Learn More </Button>
        </Grid>
      ))}
    </div>
  );
}

export default Section;
