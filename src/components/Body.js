import { useEffect, useState } from "react";
import RestroCard, { withPromtedLabel } from "./RestroCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  // const onlineStatus=useOnlineStatus();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (
      <h1>
        Looks like you are Offline Please Check Your Internet Connection!!!!!!
      </h1>
    );
  }

  const [listOfRestautants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchBar, setSearchBar] = useState("");

  const RestaurantCardPromted = withPromtedLabel(RestroCard);
  console.log("Promoted Cards", RestaurantCardPromted);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.9615398&lng=79.2961468"
    );

    const json = await data.json();

    console.log("fetched Successfull");
    console.log(json);
    setListOfRestaurants(
      json?.data.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      json?.data.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (listOfRestautants === null) {
    return (
      <h1>
        <Shimmer></Shimmer>
      </h1>
    );
  }

  // const { name } = listOfRestautants?.info;
  // if (!id) {
  //   return <h1>Id Null</h1>;
  // }
  // console.log("Above name");
  // console.log(listOfRestautants?.info?.name);

  return (
    <div className="body ">
      <div className="filter flex items-center">
        <div className="search  p-4">
          <input
            type="text"
            className="search-bar pointer-events-auto border border-solid border-black rounded-lg"
            onChange={(e) => setSearchBar(e.target.value)}
            value={searchBar}
          ></input>

          <button
            className="search-btn m-4 border-r-2 p-2 bg-green-200 rounded-2xl"
            onClick={() => {
              const filteredList = listOfRestautants.filter((e) =>
                e.info.name.toLowerCase().includes(searchBar.toLowerCase())
              );
              console.log(searchBar);
              console.log(filteredList);
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="">
          <button
            className="filter-btn bg-gray-200  p-2 rounded-lg"
            onClick={() => {
              const filterdList = listOfRestautants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filterdList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restro-container flex flex-wrap">
        {filteredList.map((rest) => (
          <Link key={rest.info.id} to={"/restaurant/" + rest.info.id}>

          {rest.info.promoted ?(
            <RestaurantCardPromted resName={rest}/>
          ) : (
            <RestroCard resName={rest}></RestroCard>
          )}

            {/* <RestroCard resName={rest}></RestroCard> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
