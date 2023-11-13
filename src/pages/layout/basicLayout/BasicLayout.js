import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/header/Header";

const BasicLayout =()=>{

return(
    <section className="basic-layout-section">
        <Header/>
        <Outlet/>


        



    </section>

)




}
export default BasicLayout;