import React from "react";
import { useFetchTables } from "../../hooks/orderHooks/orderHooks";

import "./tablePage.css";
import TableRow from "../../components/tablesRow/tablesRow";

const TablePage = () => {
  const { data: tableData, isLoading } = useFetchTables();
  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="seating">
          {tableData.data.map((items) => {
            return <TableRow tableData={items} key={items._id}/>;
          })}
        </div>
      )}
    </div>
  );
};

export default TablePage;
