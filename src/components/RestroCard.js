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
    <div className="restro-card m-4 p-4 w-[200px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
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
export default RestroCard;
