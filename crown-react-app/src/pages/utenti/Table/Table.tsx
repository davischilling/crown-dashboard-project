import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip,
  Menu,
  MenuItem,
  IconButton,
  Typography
} from "@material-ui/core";
import useStyles from "../styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";

// const states = {
//   sent: "success",
//   pending: "warning",
//   declined: "secondary",
// };

export default function TableComponent({ data }: any) {
  const keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.push('AZIONE')
  keys.shift(); // delete "id" key
  const classes: any = useStyles();
  const [moreButtonRef, setMoreButtonRef]: any = useState([]);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  
  console.log(moreButtonRef);
  

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
        {data.map(({ id, Cognome, Nome, Telefono, Esecuzione, Richiesta, Esito }: any, index: number) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{Cognome}</TableCell>
            <TableCell>{Nome}</TableCell>
            <TableCell>{Telefono}</TableCell>
            <TableCell>{Esecuzione}</TableCell>
            <TableCell>{Richiesta}</TableCell>
            <TableCell>{Esito}</TableCell>
            <TableCell>
              <IconButton
                color="primary"
                classes={{ root: classes.moreButton }}
                aria-owns={String(index)}
                aria-haspopup="true"
                onClick={() => setMoreMenuOpen(true)}
                buttonRef={setMoreButtonRef}
              >
                <MoreIcon />
              </IconButton>
            </TableCell>
            <Menu
              id={String(index)}
              open={isMoreMenuOpen}
              anchorEl={moreButtonRef}
              onClose={() => setMoreMenuOpen(false)}
              disableAutoFocusItem
              >
              <MenuItem>
                <Typography>Edit</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>Copy</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>Delete</Typography>
              </MenuItem>
              <MenuItem>
                <Typography>Print</Typography>
              </MenuItem>
            </Menu>
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
