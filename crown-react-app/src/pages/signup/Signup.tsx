import {
  Button, CircularProgress, Fade, TextField, Typography
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import FormHook from '../../hooks/form';
import google from "../../images/google.svg";
// styles
import useStyles from "./styles";
import classnames from "classnames";
import useRequest from "../../hooks/request";

export const Signup = React.memo(
  function Signup() {

    const [values, handleChange] = FormHook({
      name: "",
      email: "",
      password: "",
    });
  
    const classes = useStyles();
  
    const { redirectTo, signup } = useContext(UserContext);
    const { doRequest, error } = useRequest({
      url: '/auth/login',
      method: 'post',
      body: values,
      onSuccess: () => redirectTo('/home')
    })
  
    const [isLoading, setIsLoading] = useState(false);
  
    async function handleSignup(){
      setIsLoading(true)
      const response = await doRequest()
      signup(response)
      setIsLoading(false)
    }
  
    return (
      <React.Fragment>
        <Typography variant="h1" className={classes.greeting}>
          Welcome to Crown!
        </Typography>
        <Typography variant="h2" className={classes.subGreeting}>
          Create your account
        </Typography>
        <Fade in={error}>
          <Typography color="secondary" className={classes.errorMessage}>
            Something is wrong with your login or password :(
          </Typography>
        </Fade>
        <TextField
          id="name"
          InputProps={{
            classes: {
              underline: classes.textFieldUnderline,
              input: classes.textField,
            },
          }}
          name="name"
          value={values.name}
          onChange={handleChange}
          margin="normal"
          placeholder="Full Name"
          type="text"
          fullWidth
        />
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
        <div className={classes.creatingButtonContainer}>
          {isLoading ? (
            <CircularProgress size={26} />
          ) : (
            <Button
              onClick={handleSignup}
              disabled={
                values.name.length === 0 ||
                values.email.length === 0 ||
                values.password.length === 0
              }
              size="large"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.createAccountButton}
            >
              Create your account
            </Button>
          )}
        </div>
        <div className={classes.formDividerContainer}>
          <div className={classes.formDivider} />
          <Typography className={classes.formDividerWord}>or</Typography>
          <div className={classes.formDivider} />
        </div>
        <Button
          size="large"
          className={classnames(
            classes.googleButton,
            classes.googleButtonCreating,
          )}
        >
          <img src={google} alt="google" className={classes.googleIcon} />
          &nbsp;Sign in with Google
        </Button>
      </React.Fragment>
    );
  }
)
