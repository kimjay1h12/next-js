
import { makeStyles } from "@mui/styles"
const locate = () =>{
  window.open("https://www.google.com/maps/place/Majasan+Cl,+Ejigbo+102214,+Lagos/@6.5695493,3.2906425,16.53z/data=!4m13!1m7!3m6!1s0x103b902846022c3d:0xa4115f200d220e03!2sMajasan+Cl,+Ejigbo+102214,+Lagos!3b1!8m2!3d6.5693367!4d3.2906973!3m4!1s0x103b902846022c3d:0xa4115f200d220e03!8m2!3d6.5693367!4d3.2906973")
}
const useStyles = makeStyles({
  root:{
    '& img':{
      width:"400px",
      height:"300px",
      ["@media (min-width:1200px)"]: {
        width:"100%",
        height:"500px"
      },
    },
  }
})
function Location() {
  const classes = useStyles()
  return (
   
    <div className={classes.root} >
        <img src="/img/map.jpg" onClick={locate} />
    </div>
  )
}

export default Location