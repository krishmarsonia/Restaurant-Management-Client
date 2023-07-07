import React, { useContext } from "react";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { EnableButton } from "../../Button/Buttons";
import ItemContext from "../../../context/itemsContext/itemContext";
import {
  useDeleteItem,
  useItemToggleChange,
} from "../../../hooks/itemHooks/itemHooks";

const ItemTableRow = (props) => {
  const itemContext = useContext(ItemContext);
  const { mutate: mutateToggleChange } = useItemToggleChange();
  const { mutate: mutateDeleteItem } = useDeleteItem();
  const { row } = props;
  console.log("hello");
  // console.log(row.status);
  const expanded = itemContext.expanded;

  const editClickHandler = (e) => {};
  const deleteClickHandler = (id) => {
    const data = {
      prodId: expanded,
      itemId: id,
    };
    mutateDeleteItem(data);
  };

  const toggleEDButton = (id) => {
    const data = {
      productId: expanded,
      itemId: id,
      status: row.status,
    };
    mutateToggleChange(data);
  };

  return (
    <TableRow
      key={row._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/* {console.log(row)} */}
      <TableCell component="th" scope="row">
        {row.foodName}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.price}
      </TableCell>
      <TableCell align="left">
        {row.status ? (
          <Button
            onClick={() => toggleEDButton(row._id)}
            color="success"
            variant="contained"
          >
            Enabled
          </Button>
        ) : (
          <Button
            onClick={() => toggleEDButton(row._id)}
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
            {/* <AddIcon /> */}
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => deleteClickHandler(row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ItemTableRow;
