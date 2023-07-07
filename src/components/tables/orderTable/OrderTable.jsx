import React, { useContext, useState } from "react";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import OrderContext from "../../../context/orderContext/orderContext";

const OrderTableRow = (props) => {
  const { row } = props;
  const [count, setCount] = useState(0);

  const { increseOrderCount, showQuantity, decreseOrderCount } = useContext(OrderContext);

  const countincreaseHandler = (foodData) => {
    increseOrderCount(foodData);
    // setCount(count + 1);
  };

  const countDecreaseHandler = (foodData) => {
    decreseOrderCount(foodData);
  }
  return (
    <TableRow
      key={row._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.foodName}
      </TableCell>
      <TableCell component="th" scope="row">
        {row.price}
      </TableCell>
      <TableCell>
        <div>
          <IconButton aria-label="remove" onClick={() => countDecreaseHandler(row)}>
            <RemoveIcon color="error" />
          </IconButton>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            size="small"
            // defaultValue={count}
            value={showQuantity(row._id)}
          />
          <IconButton
            aria-label="add"
            onClick={() => countincreaseHandler(row)}
          >
            <AddIcon color="success" />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
