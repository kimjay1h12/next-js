import { Grid, Typography,Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const  useStyles = makeStyles({

  root:{
    '& input':{
height:"36px",
width:"300px"
    },
    "& 	.MuiButton-outlined": {
      background: "#f90",
      color: "white",
      marginTop:"10px",
      ["@media (min-width:1200px)"]: {
       marginLeft:"10px",
       marginTop:"0"
      },
     
    },
    "& 	.MuiGrid-container":{
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
      textAlign:"center",
     
      flexDirection: "column",
      ["@media (min-width:1200px)"]: {
        flexDirection: "row",
      },
    },
    height:"200px",
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    ["@media (min-width:1200px)"]: {
      height:"100px",
    },
  }
})
function Message() {
  const classes = useStyles()
  return (
    <div className={classes.root} >
        <Grid container >
            <Grid>
<Typography variant="h6" color="#f90" >Connect with us</Typography>
</Grid>
<Grid sx={{marginTop:"10px",marginLeft:"80px",marginRight:"80px"}} color="#F90">
<FacebookIcon/>
<TwitterIcon/>
<InstagramIcon/>
</Grid>
<Grid>
  <input type="email" placeholder="Email" />
  <Button variant="outlined" >Subscribe</Button>
</Grid>
        </Grid>
    </div>
  )
}

export default Message