import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appstore";
import Cart from "./components/Cart";


  
   const AppLayout=()=>{
        const [userName,setUserName]=useState();

        useEffect(()=>{
                const data={
                        name:"Vishal Khiratkar",
                };
                setUserName(data.name);
        },[]);







        return(
                <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
                <div className="app">
                        <Header/>
                        <Outlet/>
                </div>
                </UserContext.Provider>
                </Provider>
                
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
                {
                        path:"/cart",
                        element:<Cart/>
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

        },
        {
                path:"/cart",
                element:<Cart/>
        }
      ])
        //create Root Element in React
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<RouterProvider router ={appRouter}/> );