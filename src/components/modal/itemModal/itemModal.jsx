import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useAddItem } from "../../../hooks/itemHooks/itemHooks";

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



export default function ItemModal(props) {
  const nameRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const {mutate: itemAdder} = useAddItem();
  const { handleClose, handleOpen, open, productId } = props;
  
  //inputRef.current.value
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
    const itemButtonHandler = () => {
      const data = {
        prodId: productId,
        foodName: nameRef.current.value,
        price: priceRef.current.value
      }
      itemAdder(data);
      handleClose();
    }
    

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add Items
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="body1" component="h2">
            Item Name:
          </Typography>
          <TextField
            id="outlined-basic"
            label="Add Items"
            variant="outlined"
            inputRef={nameRef}
          />
          
          <Typography id="modal-modal-title" variant='body1' component="h2">
            Price: 
          </Typography>
          <TextField
            id="outlined-basic"
            label="Add Items"
            variant="outlined"
            inputRef={priceRef}
          />
          <br />
          <br />
          <Button variant="outlined" onClick={itemButtonHandler}>Add Item</Button>
        </Box>
      </Modal>
    </div>
  );
}
