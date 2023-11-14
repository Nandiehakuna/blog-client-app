import React from "react";
import Logo from "./mini_component/Logo";
import Menu from "./mini_component/Menu";




const Header =()=>{
    return(
        <header className="header">
            <nav className="header-nav">
                <Logo/>
                <Menu/>
               



                
            </nav>

            
            
        </header>

    )
}
export default Header;