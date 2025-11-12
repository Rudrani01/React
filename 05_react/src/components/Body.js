import RestaurentCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // Local State Variables - Super powerful variables
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    
    
    return (
        <div>
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" 
                    // callback function
                    onClick={() => {
                       // Filter Logic here
                       const filteredList = listOfRestaurants.filter(
                        (res) => res.info?.avgRating > 4.5
                       );
                       setListOfRestaurant(filteredList);
                    }}  
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants
                    .filter(r => r.info) // only keep objects that have 'info'
                    .map((restaurant, index) => (
                        <RestaurentCard
                            key={restaurant.info.id + index}
                            resData={restaurant}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Body;
