import { useContext, useState } from "react";
import OrderAccordian from "../../components/Accordian/orderAccordian";
import { useFetchAllFood } from "../../hooks/productHooks/productHooks";
import ItemContext from "../../context/itemsContext/itemContext";
import { Button, Grid} from "@mui/material";
import {styled} from '@mui/material/styles';
import OrderList from "../../components/lists/orderList";
import OrderModal from "../../components/modal/orderModal/orderModal";
import OrderContext from "../../context/orderContext/orderContext";
import { useAddOrder } from "../../hooks/orderHooks/orderHooks";

const itemHeaderArray = [
  {
    key: 1,
    name: "Item Name",
    align: "left",
  },
  {
    key: 2,
    name: "Price",
    align: "left",
  },
  {
    key: 3,
    name: "Actions",
    align: "left",
  },
];

const StyledButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#2e7d32",
    color: "#FFFFFF",
  },
}));

const OrderPage = () => {
  const [open, setOpen] = useState(true);
  const [tableNo, setTableNo] = useState(1);
  const itemContext = useContext(ItemContext);
  const {orderData, emptyOrder} = useContext(OrderContext);
  const { data, isLoading } = useFetchAllFood();
  const { mutate: postOrder } = useAddOrder();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const orderClickHandler = () => {
    const orders = {
      tableId: tableNo._id,
      foodOrder: orderData,
    };

    postOrder(orders);
    emptyOrder();
  };
  const expanded = itemContext.expanded;
  const handleChange = itemContext.handleChange;
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data.data.map((item) => {
              return (
                <OrderAccordian
                  key={item._id}
                  item={item}
                  itemHeaderArray={itemHeaderArray}
                  expanded={expanded}
                  handleChange={handleChange}
                />
              );
            })
          )}
          <br />
          <StyledButton
            variant="outlined"
            color="success"
            style={{ float: "right" }}
            onClick={() => orderClickHandler()}
          >
            Submit
          </StyledButton>
        </Grid>
        <Grid item xs={6} md={4}>
          <OrderList />
        </Grid>
      </Grid>
      <OrderModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        table={tableNo}
        setTable={setTableNo}
      />
    </div>
  );
};

export default OrderPage;
