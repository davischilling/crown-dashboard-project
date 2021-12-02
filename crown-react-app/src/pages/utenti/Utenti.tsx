import React, { useState } from 'react'
import {
  Grid,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "./Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Table from "./Table/Table";

export const Utenti = () => {

  const classes: any = useStyles();
  const [moreButtonRef, setMoreButtonRef] = useState(null);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  
  return (
    <>
      <PageTitle title="Utenti" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget
            noBodyPadding
            bodyClass={classes.tableWidget}
            isMoreMenuOpen={isMoreMenuOpen}
            moreButtonRef={moreButtonRef}
            setMoreMenuOpen={setMoreMenuOpen}
          >
            <Table data={mock.table} setMoreMenuOpen={setMoreMenuOpen} setMoreButtonRef={setMoreButtonRef} />
          </Widget>
        </Grid>
      </Grid>
    </>
  )
}