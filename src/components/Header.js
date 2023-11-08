import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header=()=>{

        const [btnName,setBtnName]=useState("Login");
        const onlineStatus=useOnlineStatus();
        const data=useContext(UserContext);

    return(
            <div className="header flex justify-between bg-pink-100 shadow-lg">
                    <div className="logo-container">
                            <img className="logo w-28" src={LOGO_URL}/>
                    </div>
                    <div className="nav-items flex items-center">
                            <ul className="flex p-4 m-4">
                                <li className="px-4">Online Status :{onlineStatus ? "💚":"❤️"}</li>
                                    <li className="px-4"> <Link to="/">Home</Link></li>
                                    <li className="px-4"><Link to="/about">About Us</Link></li>
                                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                                    <li className="px-4">Cart</li>
                                    <li className="px-4"><button className="login" onClick={()=>{
                                        btnName==="Login"?setBtnName("Logoff"):setBtnName("Login")
                                    }} >{btnName}</button></li>
                                    <li className="px-4">{data.loggedInUser}</li>
                            </ul>
                    </div>
                    
            </div>
            );
    }
    export default Header