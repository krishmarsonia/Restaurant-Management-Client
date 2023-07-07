import React, { useEffect } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import { useState } from "react";

const ProductState = (props) => {
  const [productData, setProductData] = useState();
  const statechange = (data) => {
    setProductData(data);
  };

  const delProd = (id) => {
    setProductData(productData.filter((prd) => prd._id !== id));
  };

  const toggleButton = (id) => {
    console.log(id);
    // productData.filter(prd => prd._id === id).map((b) => b.status = !b.status);
    const newlist = productData.map((item) => {
      if (item._id === id) {
        const updatedItem = {
          ...item,
          status: !item.status,
        };
        return updatedItem;
      }
      return item;
    });
    setProductData(newlist);
  };

  const addButton = (addobj) => {
   setProductData([...productData, addobj]);
    
  }

  useEffect(() => {
    axios
      .get("http://localhost:5050/getAllProducts")
      .then((products) => {
        // console.log(products.data.prods + "heyyy");
        setProductData(products.data.prods);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        statechange,
        delProd,
        toggleButton,
        addButton
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
