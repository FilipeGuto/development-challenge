import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { userById, userUpdateById } from "../../Services/users";
import "./update.css";

import { CircularProgress, Box, TextField, Button } from "@mui/material";

export default function UpdateUser() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateUser = {
      id: data.id,
      fullName: _.isEmpty(name) ? data.fullName : name,
      email: data.email,
      password: _.isEmpty(password) ? data.password : password,
      birthDate: data.birthDate,
      address: {
        country: _.isEmpty(country) ? data.address.country : country,
        state: _.isEmpty(state) ? data.address.state : state,
        city: _.isEmpty(city) ? data.address.city : city,
      },
    };

    const user = await userUpdateById(updateUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      <Box className="btn-page-update">
        <Button
          variant="contained"
          onClick={() => navigate(`/user/${data.id}`)}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={() => navigate("/")}>
          home
        </Button>
      </Box>
      <Box
        className="update-box"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="inputs-update">
          <TextField
            className="input-up"
            label="Nome completo"
            id="input.name"
            defaultValue={data.fullName}
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="input-up"
            label="Email"
            id="input.email"
            defaultValue={data.email}
            size="small"
            disabled
          />
          <TextField
            className="input-up"
            label="Senha"
            id="input.password"
            defaultValue={data.password}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="input-up"
            label="Nascimento"
            id="input.name"
            defaultValue={data.birthDate}
            size="small"
            disabled
          />
          <div>Endereço</div>
          <TextField
            className="input-up"
            label="País"
            id="input.country"
            defaultValue={data.address.country}
            size="small"
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            className="input-up"
            label="Estado"
            id="input.state"
            defaultValue={data.address.state}
            size="small"
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            className="input-up"
            label="Cidade"
            id="input.city"
            defaultValue={data.address.city}
            size="small"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <Button variant="contained" type="submit">
          Atualizar
        </Button>
      </Box>
    </>
  );
}
