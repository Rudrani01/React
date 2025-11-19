import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId + ".json");
      
      if (!data.ok) throw new Error("Menu not found");
      
      const json = await data.json();
      setResInfo(json.data);
    } catch (err) {
      console.log("Loading dummy menu...");
      const data = await fetch(
        "https://raw.githubusercontent.com/Rudrani01/React/main/mock-data/mock-menus/menu-default.json"
      );
      const json = await data.json();
      setResInfo(json.data);
    }
  };

  if (resInfo === null) return <Shimmer />;

  // ✅ Try multiple paths for restaurant info
  const restaurantInfo =
    resInfo?.cards[0]?.card?.card?.info ||
    resInfo?.cards[2]?.card?.card?.info ||
    {};

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  // ✅ Find menu cards dynamically
  const menuCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];

  // ✅ Find itemCards by searching through menu cards
  let itemCards = [];
  
  for (let card of menuCards) {
    if (card?.card?.card?.itemCards) {
      itemCards = card.card.card.itemCards;
      break;
    }
  }

  console.log("Item cards found:", itemCards);

  return (
    <div className="menu">
      <h1>{name || "Restaurant Name"}</h1>
      <h3>{cuisines?.join(", ") || "Cuisines"}</h3>
      <h3>{costForTwoMessage || "Cost info"}</h3>
      <h2>Menu:</h2>
      {itemCards.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu; 
//   return (
//     <div className="menu">
//       <h1>Name of the Restaurant</h1>
//       <h2>Menu</h2>
//       <ul>
//         <li>Biryani</li>
//         <li>Burger</li>
//         <li>Diet Coke</li>
//       </ul>
//     </div>
//   );
// };

