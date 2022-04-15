import {
  AppBar,
  Hidden,
  Backdrop,
  IconButton,
  Grow,
  Toolbar,
} from "@mui/material";
import { CloseOutlined, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles({
  toolbar: {
    color: "#fff",
    padding: "0px 20px",
    background: "none",
    borderBottom: "1px solid #ddd",
    transition: "all 0.3s",
    "& .scrolled": {
      background: "#fff",
      color: "#333",
      borderBottom: "1px solid #ddd",
    },

    "& ul": {
      listStyle: "none",
      display: "flex",
      margin: 0,
      marginLeft: "auto",

      "& a": {
        display: "flex",
        alignItems: "center",
        padding: "20px 20px",
        textTransform: "capitalize",
        color: "#F90",
        textDecoration: "none",

        "&:hover ,&.active": {
          color: "red",
          borderBottom: "5px solid blue",
        },
      },
    },

    ["@media  (min-width : 1200px)"]: {
      padding: "0px 15vw",
    },
  },
  menu: {
    marginLeft: "auto",
  },
  logo: {
    height: 25,
    transition: "all 0.3s",
    margin: "10px 0",
  },
  drawer: {
    zIndex: 1500,
    background: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    padding: 10,
    paddingTop: 40,
    width: "100%",
    "& nav": {
      listStyle: "none",
    },

    "& ul": {
      display: "flex",
      listStyle: "none",
      padding: 0,
      flexDirection: "column",
      "& a": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "column",

        textTransform: "capitalize",
        color: "#999",
        padding: 15,
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: "inherit",
      },
      "& li ": {
        "& span": {
          paddingLeft: 15,
        },
        "& a:hover , & a:active , & a.active": {
          background: "#f902",
          color: "#f90",
          fontWeight: 700,
        },
      },
    },
  },
});

function Navbar() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Drawer = (
    <div className={classes.drawer}>
      <ul>
        <nav>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Pages</a>
          <a href="">Blogs</a>
          
        </nav>
      </ul>
    </div>
  );

  return (
    <AppBar color="transparent" elevation={0}>
      <Hidden lgUp>
        <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
        <Grow in={menuOpen}>{Drawer}</Grow>
      </Hidden>
      <Toolbar
        variant="dense"
        className={[classes.toolbar, scrolled ? "scrolled" : ""].join(" ")}
      >
        <h1 style={{ color: "#f90" }}>Foodwest</h1>
        <Hidden lgUp>
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            className={classes.menu}
          >
            {menuOpen ? <CloseOutlined /> : <Menu />}
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          <ul>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Pages</a>
            <a href="">Blogs</a>
          </ul>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
