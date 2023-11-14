import React from "react";


const ToggleButton=({handleShow})=>{

    return(
        <button onClick={handleShow} className="menu-toggle">
            toggle menu
            
        </button>
    )


}
export default ToggleButton;