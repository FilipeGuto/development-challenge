import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbarLogged.css";

import Menu from "../Menu/Menu";

import {
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Zoom,
  useScrollTrigger,
  Fab,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Navbar(props) {
  const navigate = useNavigate();
  const logged = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar className="nav-top">
            <Typography variant="h6" component="div">
              MEDPAGE
            </Typography>
            <div className="box-menu">
              <IconButton
                className="icon-perfil"
                aria-label="user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate(`/user/${logged.id}`)}
                color="inherit"
              >
                <AccountCircle />
                <Typography data-cy="user-logged" className="name-perfil" variant="h6">
                  PERFIL
                </Typography>
              </IconButton>
              <Menu />
            </div>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </Box>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
