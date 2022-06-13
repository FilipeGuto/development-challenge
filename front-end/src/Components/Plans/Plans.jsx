import React, { useState } from "react";
import _ from "lodash";
import "./plans.css";

import {
  Button,
  ListSubheader,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Plans() {
  const [open, setOpen] = useState(true);
  const [plan, setPlan] = useState({});
  const [plan1, setPlan1] = useState("");
  const [plan2, setPlan2] = useState("");


  localStorage.setItem("plan", JSON.stringify(plan));
  const myPlan = JSON.parse(localStorage.getItem("plan"));
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    setOpen(!open);
  };

  if (_.isEmpty(myPlan)) {
    console.log("");
  }

  const handlePlan1 = (value) => {
    if (myPlan === value) {
      setPlan1("Você já possui esse plano");
      setTimeout(() => {
        setPlan1("");
      }, 1000);
    } else {
      setPlan(value);
      setPlan1(<CheckCircleIcon className="check-icon" />);
      setTimeout(() => {
        setPlan1("");
      }, 1000);
    }
  };

  const handlePlan2 = (value) => {
    if (myPlan === value) {
      setPlan2("Você já possui esse plano");
      setTimeout(() => {
        setPlan2("");
      }, 1000);
    } else {
      setPlan(value);
      setPlan2(<CheckCircleIcon className="check-icon" />);
      setTimeout(() => {
        setPlan2("");
      }, 1000);
    }
  };

  return (
    <section className="container-planos">
      <Typography variant="h5" className="home-title">
        Faça parte você também
      </Typography>
      <List
        id="Plans"
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        className="list-plans"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className="plans">
            Nossos Planos
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="PADRÃO" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ul>
                <li>Atendimento no site 24/7</li>
                <li>1 consulta de prioridade no mês</li>
                <li>Exames e Laudos em até 48h*</li>
              </ul>
            </ListItem>
            <div className="confirmed-plan">
              {_.isEmpty(user) ? (
                <Button variant="contained" disabled>
                  Faça login
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => handlePlan1("Plano Padrão")}
                  >
                    Padrão - $120,00
                  </Button>
                  {plan1}
                </>
              )}
            </div>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="COMPLETO" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ul>
                <li>Atendimento no site 24/7</li>
                <li>3 consultas de prioridade no mês</li>
                <li>Exames e Laudos em até 24h*</li>
                <li>Atendimento exclusivo em hospitais parceiros</li>
                <li>Tabela de consultas de acordo com seu perfil</li>
              </ul>
            </ListItem>
            <div className="confirmed-plan">
              {_.isEmpty(user) ? (
                <Button variant="contained" disabled>
                  Faça login
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => handlePlan2("Plano Completo")}
                  >
                    Completo - $220,00
                  </Button>
                  {plan2}
                </>
              )}
            </div>
          </List>
        </Collapse>
      </List>
    </section>
  );
}
