import { useState, useEffect } from "react";

const useRestaurantCard = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://raw.githubusercontent.com/Rudrani01/React/refs/heads/main/mock-data/swiggy-api.json"
      );

      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Failed to load restaurants:", err);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Expose everything Body.js needs
  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    searchText,
    setSearchText,
  };
};

export default useRestaurantCard;
