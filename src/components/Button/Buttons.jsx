import { Button } from "@mui/material";
import React from "react";

export const EnableButton = () => {
  <Button color="success" variant="contained">
    {" "}
    Enabled{" "}
  </Button>;
};

export const DisableButton = (props) => {
  <Button color="error" variant="contained">
    {" "}
    Disabled{" "}
  </Button>;
};

export const AddButton = () => {
  return (
    <div style={{height:"auto", margin:"25px 25px 0px 0px" }}>
    <Button color="success" variant="contained" style={{float: "right"}}>
      {" "}
      Add +{" "}
    </Button>
    </div>
  );
};
