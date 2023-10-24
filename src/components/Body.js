import { useState } from "react"
import RestroCard from "./RestroCard"
import resList from "./utils/mockData"

const Body=()=>{

const [listOfRestautants,setListOfRestaurants]=useState(resList);



    return(
            <div className="body">
                    <div className="filter">
                            <button className="filter-btn"
                            onClick={()=>{
                                const filterdList=listOfRestautants.filter((res)=>res.data.avgRating>4);
                                setListOfRestaurants(filterdList);
                            }}
                            
                            
                             >Top Rated Restaurant</button>
                    </div>
                    <div className="restro-container">
                            
                         {listOfRestautants.map((rest)=>(
                            <RestroCard key={rest.data.id} resName={rest}></RestroCard>
                         ))}  
                            
                           
                           
                    </div>

            </div>
    )
}
export default Body