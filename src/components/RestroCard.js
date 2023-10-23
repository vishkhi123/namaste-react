

const RestroCard=(props)=>{
    const {resName}=props;

    const {
            name,
            avgRating,
            deliveryTime,
            cuisines,
            costForTwo
    }=resName?.data;
    return(
            <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
                    <img 
                    className="resto-logo"
                    alt="resto image"
                    src=""></img>

                    <h3>{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{costForTwo / 100}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{deliveryTime} minutes</h4>
            </div>
    )
}
export default RestroCard;