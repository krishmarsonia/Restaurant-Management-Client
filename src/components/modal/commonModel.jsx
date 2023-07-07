import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

const CommonModals = (props) => {
    const {mutateProduct} = props;
  const [textFieldData, setTextFieldData] = React.useState();
  const id = props.id || null;

  const textHandler = (e) => {
    setTextFieldData(e.target.value);
  };

  const saveChangesHandler = async (e) => {
    if(id){
      const data = {
        prodId: id, 
        prodName: textFieldData
      }
      mutateProduct(data);
      props.handleClose();
    }else if(id === null){
      const data = {
        prodName: textFieldData,
      }
      mutateProduct(data);
      props.handleClose();
    }
    
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            defaultValue={props.name}
            onChange={textHandler}
          />
          <br />
          <br />
          <br />
          <br />
          <Button
            variant="contained"
            style={{ marginRight: "20px" }}
            onClick={saveChangesHandler}
          >
            Save changes
          </Button>
          <Button color="error" variant="outlined" onClick={props.handleClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default CommonModals;