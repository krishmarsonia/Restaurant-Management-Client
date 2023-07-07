import React from "react";

import {useNavigate} from 'react-router-dom'
import UnreservedTable from "../../Utils/restaurant.png";
import ReservedTable from '../../Utils/restaurant (1).png';
import hoverTable from '../../Utils/chair.png';

import "./tableRow.css";

const TableRow = (props) => {
  const { tableData } = props;
  const navigate = useNavigate();

  const orderRedirect = () => {
    navigate('/orderReview', {state:{tableData}});
  }
  return (
    <div className="tableContainer" key={tableData._id} onClick={() => orderRedirect()}>
      {tableData.occupied === true ? (
        <img src={ReservedTable} alt="table reserved" className="allTables"
        onMouseOver={e => e.currentTarget.src = hoverTable}
        onMouseOut={e => e.currentTarget.src = ReservedTable} />
      ) : (
        <img src={UnreservedTable} alt="table Occupied" className="allTables"
        onMouseOver={e => e.currentTarget.src = hoverTable}
        onMouseOut={e => e.currentTarget.src = UnreservedTable}/>
      )}
      <center>{tableData.tableNumber}</center>
    </div>
  );
};

export default TableRow;
