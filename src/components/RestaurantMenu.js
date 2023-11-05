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
//data.cards[0].card.card.info
//data.cards[0].card.card.info
   const {name,cuisines,city,costForTwoMessage}=restaurantMenu?.cards[0]?.card?.card?.info;
   const {itemCards}=restaurantMenu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
   //data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards
  // console.log("before info items")
  
//   const {menu}=listCards.cards

if (itemCards.length === 0) {
    return <div>No item cards available</div>;
  }
 console.log(itemCards)
//  const infoName = info?.name;
 // console.log(infoName)
  return (
    <div className=" m-4 p-4 bg-teal-100 w-[450px] rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold">{restaurantMenu?.cards[0]?.card?.card?.info.name}</h1> 

         <h3>{city}</h3>
        <h3>{cuisines}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>

      <div className="m-4 p-4 bg-sky-200 w-[400px] rounded-lg">

        <h1 className="text-xl font-bold">Menu</h1>
        <ul>
               {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} -price - Rs {item.card.info.price}
                    
                </li>
               ))}
        </ul>

        <h3></h3>
      </div>
    </div>
  );
};
export default RestaurantMenu;
