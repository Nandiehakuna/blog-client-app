import React,{useState} from "react";
import ToggleButton from "../ToggleButton";
import Dropdown from "../Dropdown";

const Menu =()=>{

  const [show,setShow]= useState(false) 

  const handleShow=()=>{
    setShow(!show)
    
  }

  return(
    
    <nav className={show?'menu is-open':'menu'}>

         <ToggleButton  handleShow={handleShow}/>
         <Dropdown/>
    </nav>
    
    
    )
    


}
export default Menu;
