import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestautants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchBar, setSearchBar] = useState("");

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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            onChange={(e) => setSearchBar(e.target.value)}
            value={searchBar}
          ></input>

          <button
            className="search-btn"
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

        <button
          className="filter-btn"
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
      <div className="restro-container">
        {filteredList.map((rest) => (
          <Link
            ky={rest.info.id}
            to={"/restaurant/" + rest.info.id}
          >
            <RestroCard resName={rest}></RestroCard>
          </Link>
        ))}
        {/* {filteredList.map((res)=>(
          <RestroCard key={res?.info?.id} resName={res}/>
        ))} */}
      </div>
     
    </div>
  );
};
export default Body;
