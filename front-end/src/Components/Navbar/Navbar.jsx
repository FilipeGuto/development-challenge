import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Zoom,
  useScrollTrigger,
  Fab,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import './navbar.css';

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MEDPAGE
            </Typography>
            <Button
              onClick={() => navigate("/login")}
              color="inherit"
              className="btn-login"
            >
              Entrar
            </Button>
            <Menu />
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
};
