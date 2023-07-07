import React, { useContext } from "react";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import SelectContext from "../../context/selectContext/selectContext";

const ListItemButtons = (props) => {
    const selectContext = useContext(SelectContext);
    const {classNames, selectedVal, primaryName, iconElements} = props;
    // const krish = "IndexIcon"
    return(
        <ListItemButton
          className={classNames}
          selected={selectContext.selectedIndex === selectedVal}
          onClick={(event) => selectContext.handleListItemClick(event, selectedVal)}
        >
          <ListItemIcon>
            {iconElements}
          </ListItemIcon>
          <ListItemText primary={primaryName} />
        </ListItemButton>
    )
}

export default ListItemButtons;