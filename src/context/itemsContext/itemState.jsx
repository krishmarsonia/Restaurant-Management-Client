import React, { useState } from "react";
import ItemContext from "./itemContext";

const ItemState = (props) => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ItemContext.Provider value={{ handleChange, expanded }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;
