import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EnableButton } from "../Button/Buttons";
import { Button } from "@mui/material";

const ItemRow = (props) => {
  const { row, toggleEDButton, editClickHandler, deleteClickHandler } = props;
  return (
    <TableRow
      key={row.productName}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.productName}
      </TableCell>
      <TableCell align="left">
        {row.status ? (
          <Button
            onClick={() => toggleEDButton(row.id)}
            color="success"
            variant="contained"
          >
            Enabled
          </Button>
        ) : (
          <Button
            onClick={() => toggleEDButton(row.id)}
            color="error"
            variant="contained"
          >
            Disabled
          </Button>
        )}
        <EnableButton />
      </TableCell>
      <TableCell align="left">
        <div>
          <IconButton aria-label="edit" onClick={() => editClickHandler(row)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => deleteClickHandler(row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
        {/* {console.log(row.id)} */}
      </TableCell>
    </TableRow>
  );
};

export default ItemRow;
