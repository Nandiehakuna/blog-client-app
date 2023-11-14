import React from "react"
import { Link } from "react-router-dom"
import LogoImage from "./LogoImage"


const Logo =()=>{
    return(
       <Link className="logo">
       <LogoImage className="logo-icon"/>
       <span className="bee">B</span>loggify
       </Link>

    )

}
export default Logo