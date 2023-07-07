import React, {useState } from "react";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import CommonModals from "../modal/commonModel";
import { EnableButton } from "../Button/Buttons";
import { useDeleteProduct, useToggleProduct, useUpdateProduct, useFetchAllFood } from "../../hooks/productHooks/productHooks";

const TableContent = () => {
  const [id, setId] = useState();
  const [nameProds, setNameProds] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {mutate: mutateDelete} = useDeleteProduct();
  const {mutate: mutateToggle} = useToggleProduct();
  const {mutate: mutateUpdateProduct} = useUpdateProduct()

  const {data: Foods, isLoading} = useFetchAllFood();

  const editClickHandler = (e) => {
    setNameProds(e.name);
    setId(e._id);
    handleOpen();
  };
  const deleteClickHandler = async (e) => {
    const data = {
      prodId: e
    }
    mutateDelete(data);
  };

  const toggleEDButton = (id) => {
    const data = {
      prodId: id
    }
    mutateToggle(data)
    
  };

 
  // console.log(rows);
  let whattodo;
  console.log(isLoading);
  console.log(Foods);
  if (isLoading && Foods === undefined) {
    whattodo = (
      <TableRow>
        <TableCell>Loading...</TableCell>
      </TableRow>
    );
  } else {
    whattodo = Foods.data.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        {console.log(row)}
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">
          {row.status ? (
            <Button
              onClick={() => toggleEDButton(row._id)}
              color="success"
              variant="contained"
            >
              Enabled
            </Button>
          ) : (
            <Button
              onClick={() => toggleEDButton(row._id)}
              color="error"
              variant="contained"
            >
              Disabled
            </Button>
          )}
          <EnableButton />
        </TableCell>
        <TableCell align="left">
          <div>
            <IconButton aria-label="edit" onClick={() => editClickHandler(row)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => deleteClickHandler(row._id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </TableCell>
        
      </TableRow>
      
    ));
  }

  return (
    <TableBody>
      <>{whattodo}</>
      <CommonModals
        open={open}
        handleClose={handleClose}
        name={nameProds}
        id={id}
        mutateProduct={mutateUpdateProduct}
      />
    </TableBody>
  );
  // <TableBody>
  //
  // </TableBody>
};

export default TableContent;
