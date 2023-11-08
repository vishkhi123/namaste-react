import { CLOUDINARYID } from "./utils/constants";

const RestroCard = (props) => {
  const { resName } = props;

  const {
    name,
    id,
    avgRating,
    deliveryTime,
    cuisines,
    costForTwo,
    cloudinaryImageId,
  } = resName?.info;
  return (
    <div
      className="restro-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        className="resto-logo rounded-lg"
        alt="resto image"
        src={CLOUDINARYID + cloudinaryImageId}
      ></img>
      {/* <div>{id}</div> */}
      <div className="font-bold py-2 text-lg">{name}</div>
      <div className="flex flex-wrap">{cuisines.join(", ")}</div>
      <div>{costForTwo}</div>
      <div>{avgRating} rating</div>
      {/* <h4>{deliveryTime} minutes</h4> */}
    </div>
  );
};

export const withPromtedLabel=(RestroCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-blue-500 text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestroCard {...props}/>
      </div>
    )
  }
}





export default RestroCard;
