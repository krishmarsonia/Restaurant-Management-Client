import {
  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";

const OrderListItem = (props) => {
  const { item } = props;

  return (
    // <ListItem divider key={item._id}>
    // <ListItemText primary={item.foodName} />
    
      <TableRow key={item._id}>
        <TableCell>
          {item.foodName}
        </TableCell>
        <TableCell>
          {item.quantity}
        </TableCell>
        <TableCell>
          {item.price}
        </TableCell>
        <TableCell>
          {item.price * item.quantity}
        </TableCell>
        {/* <b>{item.foodName}</b>
        <br />
        <b>Quantity:</b> {item.quantity}
        <br />
        <b>Price:</b> {item.price}
        <br />
        <b>Sum:</b> {item.price * item.quantity}
        <hr /> */}
      </TableRow>
  

    /* </ListItem> */
  );
};

export default OrderListItem;
