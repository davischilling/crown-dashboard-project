import {
  Button, CircularProgress, Fade, TextField, Typography
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FormHook from '../../hooks/form';
import useRequest from "../../hooks/request";
import google from "../../images/google.svg";
// styles
import useStyles from "./styles";

export const Login = React.memo(
  function Login() {
  
    const [values, handleChange] = FormHook({
      email: "",
      password: "",
    });
  
    const classes = useStyles();
  
    const { redirectTo, login } = useContext(UserContext);
    const { doRequest, error } = useRequest({
      url: '/auth/login',
      method: 'post',
      body: values,
      onSuccess: () => redirectTo('/home')
    })
  
    const [isLoading, setIsLoading] = useState(false);
  
    async function handleLogin(){
      setIsLoading(true)
      // const response = await doRequest()
      // login(response)
      login(values)
      setIsLoading(false)
    }
  
    return (
      <React.Fragment>
        <Typography variant="h1" className={classes.greeting}>
          Welcome Back!
        </Typography>
        <Button size="large" className={classes.googleButton}>
          <img src={google} alt="google" className={classes.googleIcon} />
          &nbsp;Sign in with Google
        </Button>
        <div className={classes.formDividerContainer}>
          <div className={classes.formDivider} />
          <Typography className={classes.formDividerWord}>or</Typography>
          <div className={classes.formDivider} />
        </div>
        <Fade in={error}>
          <Typography color="secondary" className={classes.errorMessage}>
            Something is wrong with your login or password :(
          </Typography>
        </Fade>
        <TextField
          id="email"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          name="email"
          value={values.email}
          onChange={handleChange}
          margin="normal"
          placeholder="Email Adress"
          type="email"
          fullWidth
        />
        <TextField
          id="password"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          name="password"
          value={values.password}
          onChange={handleChange}
          margin="normal"
          placeholder="Password"
          type="password"
          fullWidth
        />
        <div className={classes.formButtons}>
          {isLoading ? (
            <CircularProgress size={26} className={classes.loginLoader} />
          ) : (
            <Button
              disabled={
                values.email.length === 0 || values.password.length === 0
              }
              onClick={handleLogin}
              variant="contained"
              color="primary"
              size="large"
            >
              Login
            </Button>
          )}
          <Button
            color="primary"
            size="large"
            className={classes.forgetButton}
          >
            Forget Password
          </Button>
        </div>
      </React.Fragment>
    );
  }
)