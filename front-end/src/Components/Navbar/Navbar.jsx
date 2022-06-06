import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Zoom,
  useScrollTrigger,
  Fab,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./navbar.css";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#1a8daf",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

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

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className="navbar">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MEDPAGE
              </Typography>
              <Button color="inherit" className="nav-btn">
                Entrar
              </Button>
              <MenuIcon />
            </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor" />
        </Box>
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </CssBaseline>
  );
}
