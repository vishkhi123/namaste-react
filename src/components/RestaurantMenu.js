import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "./utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
 // const[categories,setCategories]=useState([]);
 const [showIndex,setShowIndex]=useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log("fetched Successfull");
    console.log(json);
    setRestaurantMenu(json.data);
  };

  if (restaurantMenu.length === 0) {
    return (
      <h1>
        <ShimmerMenu />
      </h1>
    );
  }

  //DESTRUCTURE
  //data.cards[0].card.card.info
  //data.cards[0].card.card.info
  //For Restaurant Name
  const { name, cuisines, city, costForTwoMessage } =
    restaurantMenu?.cards[0]?.card?.card?.info;
 
    //Filtered  Restaurant to show Menu
    let categories=restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    if(categories == null)
    {
      categories=restaurantMenu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    }

    console.log("Array Data")
    console.log(categories)
  
  return (
    <div className="text-center">
      
        <h1 className="text-2xl font-bold my-6">{name}</h1>
        <h3>{city}</h3>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

      {categories.map((cat,index)=>(
        <RestaurantCategory 
        key={cat?.card?.card?.title} 
        data={cat?.card?.card} 
        showItems={index == showIndex ? true : false}
        setShowIndex={()=>setShowIndex(index)}

        />
      ))}



      </div>

   
  );
};
export default RestaurantMenu;
