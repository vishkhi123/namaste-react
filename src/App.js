import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

  
   const AppLayout=()=>{
        return(
                <div className="app">
                        <Header/>
                        <Outlet/>
                </div>
                
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
                }
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