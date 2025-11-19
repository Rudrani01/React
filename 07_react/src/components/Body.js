import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://raw.githubusercontent.com/Rudrani01/React/refs/heads/main/mock-data/swiggy-api.json"
      );
      const json = await data.json();

      console.log("Full JSON loaded:", json);

      // ✅ Correct path - json.data.cards[1]
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      console.log("Extracted restaurants:", restaurants);
      console.log("Total restaurants found:", restaurants.length);

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Failed to load restaurants:", err);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  if (!listOfRestaurants || listOfRestaurants.length === 0)
    return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}><RestaurantCard
            resData={restaurant} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
