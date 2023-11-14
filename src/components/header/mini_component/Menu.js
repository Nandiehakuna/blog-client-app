import React,{useState} from "react";
import ToggleButton from "../ToggleButton";
import Dropdown from "../Dropdown";

const Menu =()=>{

  const {show,setShow}= useState(false) 
  return(
    
    <nav className="menu">
         <ToggleButton/>
         <Dropdown/>
    </nav>
    
    
    )
    


}
export default Menu;
