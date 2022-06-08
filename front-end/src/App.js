import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Home,
  Login,
  Register,
  User,
  UpdateUser,
} from "../src/Pages";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006d77",
    },
  },
});


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/update" element={<UpdateUser />} />
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
