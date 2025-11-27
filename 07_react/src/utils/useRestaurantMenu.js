import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

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

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
