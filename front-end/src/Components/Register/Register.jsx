import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  Button,
  Select,
  MenuItem,
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
    } else {
      const create = await userCreate(userInfo);
      if (create.message) {
        setError(create.message);
      } else {
        const login = {
          email: create.email,
          password: create.password,
        };
        await userLogin(login);
        localStorage.setItem("user", JSON.stringify(login));
        navigate("/");
      }
    }
  };

  return (
    <Box>
      <div>
        <TextField
          label="Nome completo"
          id="input-name"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
          onChange={handleChange("fullName")}
        />
        <TextField
          label="Email"
          id="input-email"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
          onChange={handleChange("email")}
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
          />
        </FormControl>
        <TextField
          label="Data de nascimento"
          id="input-birthDate"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
          onChange={handleChange("birthDate")}
        />
        <TextField
          label="País"
          id="input-country"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
          onChange={handleChange("country")}
        />
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.state}
          label="Estado"
          onChange={handleChange("state")}
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
          label="Cidade"
          id="input-city"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
          onChange={handleChange("city")}
        />
      </div>
      <Button onClick={() => handleRegister()}>ENTRAR</Button>
      {empty}
      {error}
    </Box>
  );
}
