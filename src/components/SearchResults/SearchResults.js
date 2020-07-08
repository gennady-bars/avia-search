import React from "react";

import styles from "./SearchResults.module.css";
import FlightCard from "../FlightCard/FlightCard";

const { result } = require("../../mockDB/flights.json");

const SearchResults = (props) => {
  const flights = result.flights;
  return (
    <div className={styles.SearchResults}>
      <h1>SearchResults</h1>
      {flights.map((item) => {
        return <FlightCard key={item.flightToken} item={item} />;
      })}
    </div>
  );
};

export default SearchResults;
