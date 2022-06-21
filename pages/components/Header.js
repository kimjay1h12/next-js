import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Animator from '../components/Animator'
const img = "/img/background.jpg";
const img2 = "/img/background2.jpg";
const useStyles = makeStyles({
  root: {
    '& .MuiButton-contained':{
background:"#f90",
color:"white",
width:"200px",
margin:'20px'
,height:"50px",
marginLeft:'0',
marginTop:'20px'
,
    },
    "& 	.MuiGrid-container": {
      justifyContent: "center",
      marginLeft: "20px",
      flexDirection:'column',
      ["@media (min-width:1200px)"]: {
        justifyContent: "flex-start",
        marginLeft: "200px"
       
      },
    },
    "& 	.MuiTypography-h4": {
      fontSize: "50px",
      fontWeight: "700",
      textTransform: "uppercase",
      ["@media (min-width:1200px)"]: {
        
        fontSize: "60px",
        fontWeight: "700",
      },
    },
    ["@media (min-width:1200px)"]: {
      backgroundImage: `url('${img}')`,
    },
    display: "flex",
    alignItems: "center",
   
    backgroundImage: `url('${img2}')`,
    backgroundSize: "cover",
    height: "500px",
  },
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}id="header" >
      <Animator variant="slide" direction="left" delay={800} timeout={1000}>
      <Grid container  >
        <Grid>
        <Typography variant="h4" color="#f90" className="" >
          Let <br />
          Get started
        </Typography></Grid>
        <Grid>
        <Button  variant="contained" >Shop now</Button>
        </Grid>
      
      </Grid>
      </Animator>
    </div>
  );
}

export default Header;
