import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCells from "./tableCell";

const TableHeader = (props) => {
  const {headData} = props;
  const arr = [
    {
      key: 1,
      name: "Dessert (100g serving)",
      align: "left",
    },
    {
      key: 2,
      name: "Calories",
      align: "left",
    },
    {
      key: 3,
      name: "Fat&nbsp;(g)",
      align: "right",
    },
    {
      key: 4,
      name: "Carbs&nbsp;(g)",
      align: "right",
    },
    {
      key: 5,
      name: "Protein&nbsp;(g)",
      align: "right",
    },
  ];
  return (
    <TableHead>
      <TableRow>
        {headData.map((item) => {
          return (
            <React.Fragment key={item.key}>
              <TableCells align={item.align}>
                {" "}
                {item.name}{" "}
              </TableCells>
            </React.Fragment>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
