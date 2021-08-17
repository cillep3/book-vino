import { useState } from "react";
import validator from "validator";
import "../App.scss";
import Button from "@material-ui/core/Button";
import Form from "@material-ui/core/TextField";
import grey from "@material-ui/core/colors/grey";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// import of components
import Register from "../helpers/register.json";

// Defining new color theme for material ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

const Login = () => {
  const [emailError, setEmailError] = useState();
  const [disabled, setDisabled] = useState(true);
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError();
      setDisabled(false);
    } else {
      setEmailError("Please enter a valid email");
      setDisabled(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="loginContainer">
        <h1 id="loginHeadline">Login page</h1>
        {/* <img id="loginLogo" src={Register.images[8].src} /> */}
        <div id="loginInputs">
          <div id="email" onChange={(e) => validateEmail(e)}>
            <Form
              label="info@info.com"
              variant="outlined"
              color="primary"
              display="block"
              margin="dense"
            />
          </div>
          <Form
            label="Password"
            variant="outlined"
            color="primary"
            display="block"
            margin="dense"
          />
        </div>
        <p id="emailError">{emailError}</p>
        <Button href="/create" id="loginButton" disabled={disabled}>
          Login
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Login;
