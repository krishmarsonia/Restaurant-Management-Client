import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableContent = (props) => {
  const { contentData } = props;
  console.log(contentData);
  const arr2 = ["6"];
  const arr3 = [];
  if (!contentData) {
    return null;
  } else {
    contentData.map((item) => {
      arr2.unshift(item.status);
      arr2.unshift(item.name);
      arr3.push(createData(...arr2));
    });
  }

  console.log(arr3);
  function createData(productName, status, operation) {
    return { productName, status, operation };
  }

  const rows = [
    createData("Frozen yoghurt", 159, ),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableContent;
