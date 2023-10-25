import { useState } from "react";
import { LOGO_URL } from "./utils/constants";

const Header=()=>{

        const [btnName,setBtnName]=useState("Login");

    return(
            <div className="header">
                    <div className="logo-container">
                            <img className="logo" src={LOGO_URL}/>
                    </div>
                    <div className="nav-items">
                            <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contact US</li>
                                    <li>Cart</li>
                                    <button className="login" onClick={()=>{
                                        btnName==="Login"?setBtnName("Logoff"):setBtnName("Login")
                                    }} >{btnName}</button>
                            </ul>
                    </div>
                    
            </div>
            );
    }
    export default Header