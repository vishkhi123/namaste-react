import { CLOUDINARYID } from "./utils/constants";

const RestroCard=(props)=>{
    const {resName}=props;

    const {
            name,
            avgRating,
            deliveryTime,
            cuisines,
            costForTwo,
            cloudinaryImageId
    }=resName?.info;
    return(
            <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
                    <img 
                    className="resto-logo"
                    alt="resto image"
                    src={CLOUDINARYID+cloudinaryImageId}></img>

                    <h3>{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{avgRating} rating</h4>
                    {/* <h4>{deliveryTime} minutes</h4> */}
            </div>
    )
}
export default RestroCard;