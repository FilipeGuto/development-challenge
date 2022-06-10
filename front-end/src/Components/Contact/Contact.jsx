import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./contact.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Box id="Contact">
      <nav className="nav-contact">
        <List>
          <ListItem disablePadding>
            <a
              className="link-git"
              href="https://github.com/FilipeGuto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <a
              className="link-lin"
              href="https://www.linkedin.com/in/filipeguto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
