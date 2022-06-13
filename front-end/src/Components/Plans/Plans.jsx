import React, { useState } from "react";
import _ from "lodash";
import "./plans.css";
import { useNavigate } from "react-router-dom";

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

export default function Plans() {
  const [open, setOpen] = useState(true);
  const [plan, setPlan] = useState({});
  const navigate = useNavigate();

  localStorage.setItem("plan", JSON.stringify(plan));
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    setOpen(!open);
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
            <div>
              {_.isEmpty(user) ? (
                <Button variant="contained" onClick={() => navigate("/login")}>
                  Padrão - $120,00
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() =>
                    setPlan({
                      qtd: 1,
                      plano: "Plano Padrão",
                    })
                  }
                >
                  Padrão - $120,00
                </Button>
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
              <div>
                {_.isEmpty(user) ? (
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Completo - $220,00
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() =>
                      setPlan({
                        qtd: 1,
                        plano: "Plano Completo",
                      })
                    }
                  >
                    Completo - $220,00
                  </Button>
                )}
              </div>
          </List>
        </Collapse>
      </List>
    </section>
  );
}
