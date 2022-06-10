import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

import {
  Box,
  TextField,
  InputLabel,
  Button,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";

import { userCreate, userLogin } from "../../Services/users";

export default function Register() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    birthDate: "",
    country: "",
    state: "",
    city: "",
  });
  const [empty, setEmpty] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleRegister = async () => {
    const userInfo = values;

    if (
      !userInfo.fullName &&
      !userInfo.email &&
      !userInfo.password &&
      !userInfo.birthDate &&
      !userInfo.country &&
      !userInfo.state &&
      !userInfo.city
    ) {
      setEmpty("Preencha todos os campos");
      setTimeout(() => {
        setEmpty("")
      }, 1000)
    } else {
      const create = await userCreate(userInfo);
      if (create.message) {
        setError(create.message);
        setTimeout(() => {
          setError("")
        }, 1000)
      } else {
        const login = {
          email: create.email,
          password: create.password,
        };
        setLoading(<CircularProgress />)
        setTimeout(async () => {
          const logged = await userLogin(login);
          localStorage.setItem("user", JSON.stringify(logged));
          navigate("/");
        }, 3000);
      }
    }
  };

  return (
    <Box className="box-register">
      <Typography className="register-title" variant="h5">
        Preencha todos os campos
      </Typography>
      <div className="field-login">
        <TextField
          className="inputs-register"
          label="Nome completo"
          id="input-name"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("fullName")}
          type="text"
        />
        <TextField
          className="inputs-register"
          label="Email"
          id="input-email"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("email")}
          type="email"
        />
        <TextField
          className="inputs-register"
          label="Password"
          id="input-password"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("password")}
          type="text"
        />
        <TextField
          className="input-birthDate"
          label="Data de nascimento"
          id="input-birthDate"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          size="small"
          onChange={handleChange("birthDate")}
          type="date"
        />
        <TextField
          className="inputs-register"
          label="País"
          id="input-country"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("country")}
          type="text"
        />
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          className="inputs-register"
          labelId="demo-simple-select-label"
          sx={{ m: 1, width: "35ch" }}
          id="demo-simple-select"
          value={values.state}
          label="Estado"
          onChange={handleChange("state")}
          type="text"
        >
          <MenuItem value={"AC"}>Acre</MenuItem>
          <MenuItem value={"AL"}>Alagoas</MenuItem>
          <MenuItem value={"AP"}>Amapá</MenuItem>
          <MenuItem value={"AM"}>Amazonas</MenuItem>
          <MenuItem value={"BA"}>Bahia</MenuItem>
          <MenuItem value={"CE"}>Ceará</MenuItem>
          <MenuItem value={"DF"}>Distrito Federal</MenuItem>
          <MenuItem value={"ES"}>Espírito Santo</MenuItem>
          <MenuItem value={"GO"}>Goiás</MenuItem>
          <MenuItem value={"MA"}>Maranhão</MenuItem>
          <MenuItem value={"MT"}>Mato Grosso</MenuItem>
          <MenuItem value={"MS"}>Mato Grosso do Sul</MenuItem>
          <MenuItem value={"MG"}>Minas Gerais</MenuItem>
          <MenuItem value={"PA"}>Pará</MenuItem>
          <MenuItem value={"PB"}>Paraíba</MenuItem>
          <MenuItem value={"PR"}>Paraná</MenuItem>
          <MenuItem value={"PE"}>Pernambuco</MenuItem>
          <MenuItem value={"PI"}>Piauí</MenuItem>
          <MenuItem value={"RJ"}>Rio de Janeiro</MenuItem>
          <MenuItem value={"RN"}>Rio Grande do Norte</MenuItem>
          <MenuItem value={"RS"}>Rio Grande do Sul</MenuItem>
          <MenuItem value={"RO"}>Rondônia</MenuItem>
          <MenuItem value={"RR"}>Roraima</MenuItem>
          <MenuItem value={"SC"}>Santa Catarina</MenuItem>
          <MenuItem value={"SP"}>São Paulo</MenuItem>
          <MenuItem value={"SE"}>Sergipe</MenuItem>
          <MenuItem value={"TO"}>Tocantins</MenuItem>
          <MenuItem value={"EX"}>Estrangeiro</MenuItem>
        </Select>
        <TextField
          className="inputs-register"
          label="Cidade"
          id="input-city"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("city")}
        />
      </div>
      {loading}
      {empty}
      {error}
      <Button
        className="btn-register"
        variant="contained"
        onClick={() => handleRegister()}
      >
        ENTRAR
      </Button>
    </Box>
  );
}
