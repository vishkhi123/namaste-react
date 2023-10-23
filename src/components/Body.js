import RestroCard from "./RestroCard"
import resList from "./utils/mockData"

const Body=()=>{
    return(
            <div className="body">
                    <div className="Search">
                            Search
                    </div>
                    <div className="restro-container">
                            
                         {resList.map((rest)=>(
                            <RestroCard key={rest.data.id} resName={rest}></RestroCard>
                         ))}  
                            
                           
                           
                    </div>

            </div>
    )
}
export default Body