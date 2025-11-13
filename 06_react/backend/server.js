const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors()); // allows React app to access backend

app.get("/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    const data = await response.json();
    res.json(data); // send data to React
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch Swiggy data");
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
