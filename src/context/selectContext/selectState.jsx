import React, {useState} from "react";

import SelectContext from './selectContext';

const SelectState = (props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };

    return(
        <SelectContext.Provider value={{selectedIndex, handleListItemClick}}>
            {props.children}
        </SelectContext.Provider>
    )


}

export default SelectState;
