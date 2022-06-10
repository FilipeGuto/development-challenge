import React, { useEffect, useState } from "react";
import _ from "lodash";
import { userById } from "../../Services/users";
import { useNavigate } from "react-router-dom";
import Signatures from "../Signatures/Signatures";
import "./user.css";

import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
  Box,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import CakeIcon from "@mui/icons-material/Cake";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HomeIcon from "@mui/icons-material/Home";
import DeleteUser from "../DeleteUser/DeleteUser";

export default function User() {
  const [data, setData] = useState({});
  const plan = JSON.parse(localStorage.getItem("plan"));
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    userById(user.id).then((res) => setData(res));
  }, []);

  if (_.isEmpty(data)) {
    return (
      <div className="loading-user">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box className="box-user">
      <div className="top-options">
        <Signatures
          title="Minhas assinaturas"
          subtitle={`Você tem ${_.isEmpty(plan) ? "0" : plan.qtd} assinatura ativa`}
          text={`Assinatura: ${_.isEmpty(plan) ? "0" : plan.plano}`}
          btnConfirm="Cancelar assinatura"
          btnWarning="Aviso"
          btnNo="Voltar"
          paragraph="Confirme sua decisão"
          btnYesClear="Sim"
        />
        <Button variant="contained" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <PersonIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText primary="Nome completo" secondary={data.fullName} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <EmailIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={data.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <KeyIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText primary="Senha" secondary={data.password} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <CakeIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText
            primary="Data de nascimento"
            secondary={data.birthDate}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <TravelExploreIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText primary="País" secondary={data.address.country} />
          <ListItemText primary="Estado" secondary={data.address.state} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <HomeIcon fontSize="large" />
          </ListItemAvatar>
          <ListItemText primary="Cidade" secondary={data.address.city} />
        </ListItem>
      </List>
      <div className="bottom-options">
        <DeleteUser
          user={data.id}
          title="Excluir"
          text="Deseja excluir seu usuario do nosso sistema?"
          btnConfirm="Confirmar"
          btnWarning="Aviso"
          btnYesDelete="Sim"
          btnNo="Voltar"
          paragraph="Confirme sua decisão"
        />
        <Button variant="contained" onClick={() => navigate("/update")}>
          Atualizar
        </Button>
      </div>
    </Box>
  );
}
