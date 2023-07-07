import React from "react";
import { useLocation } from "react-router-dom";
import { useFetchAllOrders } from "../../hooks/orderHooks/orderHooks";
import {
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import OrderListItem from "../../components/lists/orderListItem";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const OrderReview = () => {
  const location = useLocation();
  const tableData = location.state.tableData;
  const { data: orderDetails, isLoading } = useFetchAllOrders(tableData._id);
  if (!isLoading) {
    const sio = orderDetails.data.order.reduce(
      (sum, val) => sum + val.price * val.quantity,
      0
    );
    console.log(sio);
  }
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Grid2 container flexDirection="column">
          <Grid2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Food Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Price</b>
                  </TableCell>
                  <TableCell>
                    <b>Quantity</b>
                  </TableCell>
                  <TableCell>
                    <b>Total</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetails.data.order.map((or) => {
                  return <OrderListItem item={or} key={or._id} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid2>
          <Grid2>
          <div style={{ float: "right", marginRight: "15%" }}>
            <h1>
              Total:{" "}
              {orderDetails.data.order.reduce(
                (sum, val) => sum + val.price * val.quantity,
                0
              )}
            </h1>
          </div>
          </Grid2>
          <Grid2>
          <Button style={{float:"right", width:"5%", marginRight: "15%" }} color="success" variant="contained">Submit</Button>
          </Grid2>
          </Grid2>
      )}
    </div>
  );
};

export default OrderReview;
