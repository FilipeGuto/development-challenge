import React, { useEffect, useState } from "react";
import _ from "lodash";
import { userById } from "../../Services/users";
import { useNavigate } from "react-router-dom";
import Account from "../Account/Account";

import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  CircularProgress,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import CakeIcon from "@mui/icons-material/Cake";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HomeIcon from "@mui/icons-material/Home";

export default function User() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    userById(user.id).then((res) => setData(res));
  }, []);

  if (_.isEmpty(data)) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => navigate("/")}>Voltar</Button>
      <Account
        title="Ver minhas assinaturas"
        subtitle="Você tem 01 assinaturas ativas"
        text="Assinatura: PartMED"
        btnConfirm="Cancelar assinatura"
        btnWarning="Aviso"
        btnNo="Voltar"
        paragraph="Confirme sua decisão"
      />
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
      <Button
      onClick={() => navigate('/update')}
      >
        Atualizar
      </Button>
      <Account
        user={data.id}
        title="Excluir"
        text="Deseja excluir seu usuario do nosso sistema?"
        btnConfirm="Confirmar"
        btnWarning="Aviso"
        btnYesDelete="Sim"
        btnNo="Voltar"
        paragraph="Confirme sua decisão"
      />
    </>
  );
}
