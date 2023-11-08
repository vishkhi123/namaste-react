import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/utils/UserContext";


  
   const AppLayout=()=>{
        const [userName,setUserName]=useState();

        useEffect(()=>{
                const data={
                        name:"Vishal Khiratkar",
                };
                setUserName(data.name);
        },[]);







        return(
                <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
                <div className="app">
                        <Header/>
                        <Outlet/>
                </div>
                </UserContext.Provider>
                
                );
        }       


      const appRouter=createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[{
                        path:"/",
                        element:<Body/>
                },
                {
                        path:"/about",
                        element:<AboutUs/>
                },
                {
                        path:"/contact",
                        element:<ContactUs/>
                },
                {
                        path:"/restaurant/:resId",
                        element:<RestaurantMenu/>
                },
               
                ],
                errorElement:<Error/>
        },
        {
                path:"/about",
                element:<AboutUs/>
        },
        {
                path:"/contact",
                element:<ContactUs/>

        }
      ])
        //create Root Element in React
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<RouterProvider router ={appRouter}/> );