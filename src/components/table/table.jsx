import * as React from "react";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHeader from "./tableHeader";
import TableContent from "./tableContent";
import { useLocation } from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import { Button } from "@mui/material";
// import BasicAddModal from "../modal/addModel";
import { useAddProduct } from "../../hooks/productHooks/productHooks";
import CommonModals from "../modal/commonModel";

export default function BasicTable(props) {
  const [open, setOpen] = React.useState(false);
  const {mutate: mutateAddProduct} = useAddProduct();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const testarray = [
  //   { productName: "test1", status: true, id: "63ea83933860f63e600a89fb" },
  //   { productName: "test2", status: true, id: "63ea83933860f63e600a89fb" },
  // ];
  const { headdata, contentData } = props;
  const location = useLocation();

  const addListner = () => {
    handleOpen();
  };
  console.log(location.pathname);
  return (
    <>
      <div style={{ height: "auto", margin: "25px 25px 0px 0px" }}>
        <Button color="success" variant="contained" style={{ float: "right" }} onClick={addListner}>
          {" "}
          Add +{" "}
        </Button>
      </div>
      <TableContainer component={Paper}>
        {/* <Button color="success" variant="contained">Add + </Button> */}
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHeader headData={headdata} />
          <TableContent contentData={contentData} />
        </Table>
      </TableContainer>
      <CommonModals open={open} handleClose={handleClose} mutateProduct={mutateAddProduct} />
    </>
  );
}
