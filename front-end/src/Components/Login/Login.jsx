import * as React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logoLogin.png";
import "./login.css";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
  CardMedia,
  Typography,
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
      setEmpty("Preencha os todos campos");
      setTimeout(() => {
        setEmpty("");
      }, 1000);
    } else {
      const login = await userLogin(userInfo);
      if (login.message) {
        setError(login.message);
        setTimeout(() => {
          setError("");
        }, 1000);
      } else {
        localStorage.setItem("user", JSON.stringify(login));
        navigate("/");
      }
    }
  };

  return (
    <div className="container-login">
      <CardMedia
        className="img-logo-login"
        component="img"
        height="250"
        image={logo}
        alt="Logo"
      />
      <Box className="box-login">
        <TextField
          className="input-email"
          label="Email"
          id="input-email"
          sx={{ m: 1, width: "35ch" }}
          variant="filled"
          onChange={handleChange("email")}
          type="email"
        />
        <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            className="input-password"
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
        <Button
          variant="contained"
          className="login-btn"
          onClick={() => handleLogin()}
        >
          ENTRAR
        </Button>
        <Typography variant="subtitle1">
          {empty}
          {error}
        </Typography>
        <Typography variant="h6">
          Ainda não tem conta?
          <Button onClick={() => navigate("/register")}>
            <Typography variant="body1">Clique aqui</Typography>
          </Button>
        </Typography>
      </Box>
    </div>
  );
}
