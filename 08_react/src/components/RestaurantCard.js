import { CDN_URL } from "../utils/constants";

function RestaurantCard(props) {
  // const {resName, cuisine} = props;
  const { resData } = props;

  // optional chaining
  const {
    cloudinaryImageId, // restaurant image
    name,              // restaurant name
    avgRating,         // average rating
    cuisines,          // list of cuisines
    costForTwo,        // cost info
    sla                // delivery info
  } = resData?.info || {}; // use info instead of data

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : ""}
      />
      <h3>{name || "No Name"}</h3>
      <h4>{cuisines ? cuisines.join(", ") : "N/A"}</h4>
      <h4>{avgRating ? `${avgRating} stars` : "No rating"}</h4>
      <h4>{costForTwo || "Cost info unavailable"}</h4>
      <h4>{sla?.deliveryTime ? `${sla.deliveryTime} minutes` : "N/A"}</h4>
    </div>
  );
}

export default RestaurantCard;
