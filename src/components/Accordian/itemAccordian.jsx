import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import { Button, Table, TableBody } from "@mui/material";
import ItemTableRow from "../../components/tables/itemsTable/itemTableRow";
import TableHeader from "../../components/table/tableHeader";

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

const ItemsAccordian = (
  {item,
  itemHeaderArray,
  expanded,
  handleChange,
  addButtonHandler}
) => {
  return (
    <Accordion
      key={item._id}
      expanded={expanded === item._id}
      onChange={handleChange(item._id)}
      // style={{ border: "1px solid white" }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography component={"span"} style={{ width: "100%" }}>
          <div className="parentClass">
            <div>{item.name}</div>
            <div>
              <Button onClick={() => addButtonHandler(item._id)}>Add</Button>
            </div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul style={{ listStyle: "none" }}>
          <Typography>
            <Table>
              <TableHeader headData={itemHeaderArray} />
              <TableBody>
                {item.items.map((prodItems) => {
                  return <ItemTableRow row={prodItems} />;
                })}
              </TableBody>
            </Table>
          </Typography>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default ItemsAccordian;
