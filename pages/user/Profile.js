import { Typography,Grid,Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import End from "../components/End"
import Mainlayout from "../components/Mainlayout";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const useStyles = makeStyles({
root:{
  "& 	.MuiGrid-container":{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    textAlign:"center",
  
  
  
  },
  "& 	.MuiButton-outlined": {
    background: "#f90",
    color: "white",
    width:"150px",
    alignItems:'flex-start',
    marginTop: "7px",
  },
  '& input':{
    width:"300px",
    height:"40px",
marginTop:"7px",
['@media (min-width:1200px)']:{
  width:"400px",
  height:"40px",
},
  },
  marginTop:"210px",
  ['@media (min-width:1200px)']:{
    marginTop:"300px",
  },
}
})
function Profile() {
const classes = useStyles()
  return (
    <div className={classes.root} >

        <Mainlayout/>
       
        <AnimationOnScroll animateIn="animate__bounceIn">
<Grid container 


>
    <Typography  variant="h5" color="#f90" sx={{fontWeight:"700"}} >
    Authorization
    </Typography>
     <Grid container
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    >
        <input type="email" placeholder="Email"/>
        <input type="email" placeholder="Password"/>
        <Button variant="outlined">Sign in</Button>
        <Typography>or </Typography>
      
        <Button variant="outlined">Sign up</Button>
    </Grid>

</Grid>
        <End/>
        </AnimationOnScroll>
    </div>
  )
}

export default Profile