import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Mainlayout from "../components/Mainlayout";
import End from "../components/End";
const useStyles = makeStyles({
  root: {
    "& .MuiCard-root": {
      marginTop: "20px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "120px",

    ["@media (min-width:1200px)"]: {
      flexDirection: "row",
      marginTop: "250px",
    },
  },
});
const categories = [
  {
    url: "/img/img1.jpg",
    title: "localDishes",
    button: "view",
  },
  {
    url: "/img/img1.jpg",
    title: "localDishes",
    button: "view",
  },
  {
    url: "/img/img1.jpg",
    title: "localDishes",
    button: "view",
  },
  {
    url: "/img/img1.jpg",
    title: "localDishes",
    button: "view",
  },
];
export default function Categories() {
  const classes = useStyles();
  return (
    <div>
      <Mainlayout />
      <div className={classes.root}>
        {categories.map((cur, index) => (
          <Card sx={{ width: "300px" }} key={index}>
            <CardMedia
              component="img"
              height="140"
              img
              src={cur.url}
              alt="green iguana"
            />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                gutterBottom
                variant="h5"
                color="#f90"
                component="div"
              >
                {cur.title}
              </Typography>

              <Button>{cur.button}</Button>
            </Grid>
          </Card>
        ))}
      </div>
      <div className={classes.root}>
        {categories.map((cur, index) => (
          <Card sx={{ width: "300px" }} key={index}>
            <CardMedia
              component="img"
              height="140"
              img
              src={cur.url}
              alt="green iguana"
            />
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                gutterBottom
                variant="h5"
                color="#f90"
                component="div"
              >
                {cur.title}
              </Typography>

              <Button>{cur.button}</Button>
            </Grid>
          </Card>
        ))}
      </div>
      <End />
    </div>
  );
}
