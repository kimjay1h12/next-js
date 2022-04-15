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
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      background: "red",
      color: "#f90",
      width:"150px",
      height:'50px',
      marginTop: "20px",
    },
    "& .MuiTypography-h4": {
      display:"flex",
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
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
      {buider.map((cur, index) => (
        <Grid
          container
          key={index}
          style={{
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

          <Button  variant="contained" >Learn More </Button>
        </Grid>
      ))}
    </div>
  );
}

export default Section;
