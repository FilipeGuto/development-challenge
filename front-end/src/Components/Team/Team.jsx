import React from "react";
import "./team.css";

import {
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  List,
  Divider,
  ListItemText,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MasksIcon from "@mui/icons-material/Masks";

export default function Team() {
  return (
    <section className="container-team">
      <List className="container-list">
        <div className="list-items">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalHospitalIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h5" color="primary">
                + 50
              </Typography>
            }
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="subtitle1"
                  color="primary"
                >
                  Hospitais
                </Typography>
                {" — Para seu conforto, e atendimento"}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MedicalServicesIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h5" color="primary">
                + 180
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="subtitle1"
                  color="primary"
                >
                  Clinicas
                </Typography>
                {" — Espalhadas por todo Brasil"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MasksIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h5" color="primary">
                + 70
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="subtitle1"
                  color="primary"
                >
                  Médicos
                </Typography>
                {" — Prontos para te atender"}
              </React.Fragment>
            }
          />
        </ListItem>
        </div>
      </List>
    </section>
  );
}
