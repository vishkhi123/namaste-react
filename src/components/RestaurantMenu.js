import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  const {resId}=useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     MENU_URL +resId
    );
    const json = await data.json();
    console.log("fetched Successfull")
    console.log(json);
    setRestaurantMenu(json.data);
  };

  if (restaurantMenu.length === 0) {
    return (
      <h1>
        <Shimmer/>
      </h1>
    );
  }

//DESTRUCTURE
   const {name,cuisines,city,costForTwoMessage}=restaurantMenu?.cards[0]?.card?.card?.info;
  const {itemCards}=restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log("before info items")
  
//   const {menu}=listCards.cards

if (!itemCards) {
    return <div>No item cards available</div>;
  }
console.log(itemCards)
//  const infoName = info?.name;
 // console.log(infoName)
  return (
    <div>
      <div>
        <h1>{name}</h1>

        <h3>{city}</h3>
        <h3>{cuisines}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
               {itemCards.map((item)=>(
                <li key={itemCards.card.info.id}>{item.card.info.name} -price - Rs {item.card.info.price}
                    
                </li>
               ))}
        </ul>

        <h3></h3>
      </div>
    </div>
  );
};
export default RestaurantMenu;
