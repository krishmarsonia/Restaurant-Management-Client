import React, {useContext} from "react";

import SelectContext from "../../context/selectContext/selectContext";

import './rightScreen.css';

const RightScreen = () => {
    const context = useContext(SelectContext);

    return(
        <div className="rightscreenmainclass">
            {context.selectedIndex}        
        </div>
    )
}

export default RightScreen;