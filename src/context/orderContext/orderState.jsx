import React, { useState } from "react";
import OrderContext from "./orderContext";

const OrderState = (props) => {
  const [orderData, setOrderData] = useState([]);

  const addOrder = (data) => {
    setOrderData([...orderData, data]);
  };
  // console.log(orderData);

  const increseOrderCount = (foodData) => {
    console.log(orderData);
    const id = orderData.findIndex((dt) => dt._id === foodData._id);
    // console.log(id);
    if (id === -1) {
      setOrderData([...orderData, { ...foodData, quantity: 1 }]);
    } else {
      // console.log(orderData[id]._id)

      // orderData[id] = {...orderData[id], quantity: quan}
      return setOrderData((prevState) => {
        prevState[id] = {
          ...orderData[id],
          quantity: orderData[id].quantity + 1,
        };
        return [...prevState];
      });
    }
  };

  const decreseOrderCount = (foodData) => {
    const id = orderData.findIndex((dt) => dt._id === foodData._id);

    if (id !== -1) {
      if (orderData[id].quantity > 1) {
        return setOrderData((prevState) => {
          prevState[id] = {
            ...orderData[id],
            quantity: orderData[id].quantity - 1,
          };
          return [...prevState];
        });
      } else if (orderData[id].quantity === 1) {
        return setOrderData((prevState) =>
          prevState.filter((item) => item._id !== foodData._id)
        );
      }
    }
  };

  const showQuantity = (foodData) => {
    let orders = orderData;
    const id = orders.findIndex((da) => da._id === foodData);
    console.log(orders);
    if (id === -1) {
      // foodData.quantity = 1;
      // addOrder(foodData);
      return 0;
    } else {
      console.log(orders[id].quantity);
      return orders[id].quantity;
    }
  };

  const emptyOrder = () => {
    setOrderData([]);
  }

  // useEffect(() => {
  //   showQuantity();
  // }, [])

  return (
    <OrderContext.Provider
      value={{
        orderData,
        setOrderData,
        addOrder,
        increseOrderCount,
        decreseOrderCount,
        showQuantity,
        emptyOrder
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
