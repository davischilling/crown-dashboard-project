import React from "react";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const useStyles = makeStyles((theme: any) => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export const Users = () => {
  
  const classes: any = useStyles();

  return (
    <div>
      <PageTitle title="Utenti" button={
        <Button
          variant="contained"
          size="medium"
          color="primary"
        >
          Nuovo Utente
        </Button>}
        />
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MUIDataTable
              title="Employee List"
              data={datatableData}
              columns={["Name", "Company", "City", "State"]}
              options={{
                filterType: "checkbox",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
              <Table data={mock.table} />
            </Widget>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}