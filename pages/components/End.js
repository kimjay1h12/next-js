import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"


const content = [
    {
        title:"Category",
        item1:"Local Dishes",
        item2:"Snacks",
        item3:"Drinks",
        item4:"Friuts",
        item5:"international dishes",
        item6:"Chinese Dishes",
    },
    {
        title:"Information",
        item1:"About Us",
        item2:"Delivery Information",
        item3:"Privacy Policy",
        item4:"Terms And Condition",
        item5:"Contact",
        item6:"Blog",
    },
    {
        title:"Contacts",
        item1:"Created By Kim jay",
        item2:"A FrontEnd Web Developer",
        item3:"Olawaleadeit@gmail.com",
        item4:"",
        item5:"",
        item6:"",
    }
]
const useStyles = makeStyles({
    root:{
        "& 	.MuiGrid-container":{
            display:"flex",
            justifyContent:'center',
            alignItems:'center',
            textAlign:"center",
            color:"#f90",
            lineHeight:'1.8',
            height:'250px',
           
            flexDirection: "column",
            ["@media (min-width:1200px)"]: {
              flexDirection: "column",
            },
          },
        display:"flex",
        alignItems:"center",
        textAlign:"center",
    
        justifyContent:"space-around",
        flexDirection: "column",
        marginTop:"100px",
        ["@media (min-width:1200px)"]: {
            flexDirection: "row",
          },
    }
})
function End() {
    const classes = useStyles()
  return (
      <div>
    <div className={classes.root} >
        {content.map((cur, index )=>(
            <Grid container
            key={index}
            
            >
<Typography variant="h4" >
    {cur.title}
</Typography>
<Typography>
    {cur.item1}
</Typography>
<Typography>
    {cur.item2}
</Typography>
<Typography>
    {cur.item3}
</Typography>
<Typography>
    {cur.item4}
</Typography>
<Typography>
    {cur.item5}
</Typography>
<Typography>
    {cur.item6}
</Typography>
            </Grid>
        ))}
  
    </div>
    <Grid
     container
     alignItems="center"
     justifyContent="center"
     color="white"
     sx={{background:"#f90",height:"80px"}}
     >
         <Typography variant="h6" >Foodwest</Typography>
         </Grid>  
    </div>
  )
}

export default End