import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
// logo
import logo from "../../images/logo.svg";
// styles
import useStyles from "./styles";

interface Props {
  children: JSX.Element[] | JSX.Element
  handleRedirect: (path: string) => void
  currentPath: string
}

export const AuthTheme = ({ currentPath, handleRedirect, children }: Props) => {

  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Crown Dashboard</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={currentPath === '/login' ? 0 : 1}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} onClick={() => handleRedirect('/login')} />
            <Tab label="New User" classes={{ root: classes.tab }} onClick={() => handleRedirect('/signup')} />
          </Tabs>
          {children}
        </div>
        <Typography color="primary" className={classes.copyright}>
        © 2014-{new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://mobilesoft.it" rel="noopener noreferrer" target="_blank">Mobilesoft</a>, LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}
