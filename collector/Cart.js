import { Button, Grid, Typography } from "@mui/material"
import Link from "next/link";
import End from "../End";
import Mainlayout from "../Mainlayout";
function Cart() {
  return (
    <div style={{marginTop:"250px"}} >
        <Mainlayout/>
        <Grid container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        >
            <Typography variant="h4" color="#f90" sx={{fontWeight:'700', marginTop:"10px"}} >
                Shopping Cart
            </Typography>
            <Typography color="#f90"sx={{ marginTop:"10px"}} >
               Cart is Empty
            </Typography>
            <Link href="/"><Button variant="outlined"  sx={{background:"#f90",marginTop:"10px",color:"#fff"}}>Continue Shopping</Button></Link>
        </Grid>
        <End/>
    </div>
  )
}

export default Cart