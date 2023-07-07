import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useFetchAllFood } from "../../hooks/productHooks/productHooks";

import "./foodItems.css";
import { Button, Table, TableBody } from "@mui/material";
import { useAddItem } from "../../hooks/itemHooks/itemHooks";
import ItemModal from "../../components/modal/itemModal/itemModal";
import ItemTableRow from "../../components/tables/itemsTable/itemTableRow";
import TableHeader from "../../components/table/tableHeader";
import ItemContext from "../../context/itemsContext/itemContext";
import ItemsAccordian from "../../components/Accordian/itemAccordian";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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
    name: "Status",
    align: "left",
  },
  {
    key: 4,
    name: "Operations",
    align: "left",
  },
];

const FoodItems = (props) => {
  // const { prodItems, setProducts } = props;

  const itemContext = React.useContext(ItemContext);

  // const [expanded, setExpanded] = React.useState("panel1");
  const [open, setOpen] = React.useState(false);
  const [productId, setProductId] = React.useState();

  const { data, isLoading } = useFetchAllFood();
  const { mutate: mutateAddItem } = useAddItem();
  console.log(data);
  const expanded = itemContext.expanded;
  const handleChange = itemContext.handleChange;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  const addButtonHandler = (e) => {
    console.log(e);
    setProductId(e);
    // mutateAddItem(e);
    handleOpen();
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        data.data.map((item) => {
          return (
            <ItemsAccordian
              item={item}
              itemHeaderArray={itemHeaderArray}
              expanded={expanded}
              handleChange={handleChange}
              addButtonHandler={addButtonHandler}
            />
          );
        })
      )}
      <ItemModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        productId={productId}
      />
    </div>
  );
};

export default FoodItems;
