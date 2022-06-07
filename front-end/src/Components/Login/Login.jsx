import * as React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { userLogin } from "../../Services/users";

export default function Login() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [empty, setEmpty] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const userInfo = values;

    if (!userInfo.email && !userInfo.password) {
      setEmpty("Dados inválidos");
    } else {
      const login = await userLogin(userInfo);
      if (login.message) {
        setError("Email ou senha incorretos");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <Box>
      <div>
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
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <Button onClick={() => handleLogin()}>ENTRAR</Button>
      {empty}
      {error}
      <p>Ainda não tem conta?
        <Button onClick={() => navigate("/register")}>
          Clique aqui
        </Button>
      </p>
    </Box>
  );
}
