import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useFetchTables } from "../../../hooks/orderHooks/orderHooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OrderModal(props) {
  const { data: tableData, isLoading } = useFetchTables();
  const { open, handleClose, table, setTable } = props;

  const handleChange = (event) => {
    setTable(event.target.value);
  };

  const handleSubmit = () => {
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" component="h2">Select a Table</Typography>
        <br />
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <FormControl style={{ width: "40%" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={table}
              label="Age"
              onChange={handleChange}
            >
              {tableData.data.map((itemsTable) => {
                return (
                  <MenuItem value={itemsTable} key={itemsTable._id}>
                    {itemsTable.tableNumber}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
        <br />
        <br />
        <Button color="success" onClick={() => handleSubmit()}>Submit</Button>
      </Box>
    </Modal>
  );
}
