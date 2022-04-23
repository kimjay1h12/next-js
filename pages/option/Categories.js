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
    "& img": {
      height: "100%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
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
  root2: {
    "& .MuiCard-root": {
      marginTop: "20px",
    },
    "& img": {
      height: "100%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10px",

    ["@media (min-width:1200px)"]: {
      flexDirection: "row",
      marginTop: "250px",
    },
  },
});

const categories = [
  {
    url: "/img/drinks.webp",
    title: "Drinks",
  },
  {
    url: "/img/bread.jpg",
    title: "Bread & Bakery",
  },
  {
    url: "/img/cereal.jpg",
    title: "Cereal",
  },
  {
    url: "/img/swallow.jpg",
    title: "swallow food",
  },
];
const categories2 = [
  {
    url: "/img/snacks.jpg",
    title: "Snacks",
  },
  {
    url: "/img/bread.jpg",
    title: "Bread & Bakery",
  },
  {
    url: "/img/img1.jpg",
    title: "localDishes",
  },
  {
    url: "/img/img1.jpg",
    title: "localDishes",
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
                sx={{ fontWeight: "700" }}
                component="div"
              >
                {cur.title}
              </Typography>
            </Grid>
          </Card>
        ))}
      </div>
      <div className={classes.root2}>
        {categories2.map((cur, index) => (
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
            </Grid>
          </Card>
        ))}
      </div>
      <End />
    </div>
  );
}
