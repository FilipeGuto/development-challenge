import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Menu, MenuItem } from "@mui/material";
import "./menu.css";

import MenuIcon from "@mui/icons-material/Menu";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="medium"
        color="inherit"
        aria-label="menu"
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <a className="link-menu" href="#Home">HOME</a>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <a className="link-menu" href="#Notes">AVALIAÇÕES</a>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <a className="link-menu" href="#Partners">PARCEIROS</a>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <a className="link-menu" href="#Plans">PLANOS</a>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <a className="link-menu" href="#Contact">CONTATOS</a>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
