import React from "react"
import { Link } from "react-router-dom"
import LogoImage from "./LogoImage"


const Logo =()=>{
    return(
       <Link className="logo">
       <LogoImage className="logo-icon"/>
       Bloggify
       </Link>

    )

}
export default Logo