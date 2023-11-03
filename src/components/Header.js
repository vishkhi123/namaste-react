import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

        const [btnName,setBtnName]=useState("Login");

    return(
            <div className="header flex justify-between bg-pink-100 shadow-2xl m-5">
                    <div className="logo-container">
                            <img className="logo w-52" src={LOGO_URL}/>
                    </div>
                    <div className="nav-items flex">
                            <ul className="flex p-4 m-4">
                                    <li> <Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li>Cart</li>
                                    <li><button className="login" onClick={()=>{
                                        btnName==="Login"?setBtnName("Logoff"):setBtnName("Login")
                                    }} >{btnName}</button></li>
                            </ul>
                    </div>
                    
            </div>
            );
    }
    export default Header