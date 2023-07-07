import React from 'react';
import TableCell from "@mui/material/TableCell";


const TableCells = (props) => {
    const {align, key} = props;

    return(
        <TableCell key={key} align={align}>
          <b>{props.children}</b>
        </TableCell>
    )
}

export default TableCells;