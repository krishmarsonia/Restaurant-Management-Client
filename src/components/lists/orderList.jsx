import React, { useContext } from "react";
import OrderContext from "../../context/orderContext/orderContext";
import OrderListItem from "./orderListItem";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const OrderList = () => {
  const { orderData } = useContext(OrderContext);
  return (
    <div>
      {/* <List component="nav" aria-label="mailbox folders"> */}
      {orderData.length === 0 ? (
        <p>none</p>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="Order Table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>Price</b>
                </TableCell>
                <TableCell>
                  <b>Quantity</b>
                </TableCell>
                <TableCell>
                  <b>Total Sum</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderData.map((item) => {
                return <OrderListItem item={item} key={item._id} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {/* </List> */}
    </div>
  );
};

export default OrderList;
