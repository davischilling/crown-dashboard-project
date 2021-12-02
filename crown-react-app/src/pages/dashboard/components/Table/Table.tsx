import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

// const states = {
//   sent: "success",
//   pending: "warning",
//   declined: "secondary",
// };

export default function TableComponent({ data }: any) {
  const classes: any = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => {
            return key === 'ESECUZIONE' || key === 'RICHIESTA' ?
              (<TableCell key={key}>DATA {key}</TableCell>) :
              (<TableCell key={key}>{key}</TableCell>)
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, Cognome, Nome, Telefono, Esecuzione, Richiesta, Esito }: any) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{Cognome}</TableCell>
            <TableCell>{Nome}</TableCell>
            <TableCell>{Telefono}</TableCell>
            <TableCell>{Esecuzione}</TableCell>
            <TableCell>{Richiesta}</TableCell>
            <TableCell>{Esito}</TableCell>
            {/* <TableCell>
              <Chip label={status} classes={{root: classes[
                status.toLowerCase()
              ]}}/>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
