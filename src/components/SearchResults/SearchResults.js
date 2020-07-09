import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import styles from "./SearchResults.module.css";
import FlightCard from "../FlightCard/FlightCard";
import {
  searchByCityThunk,
  searchByCity,
} from "../../redux/actions/searchAction";

const SearchResults = ({
  flights,
  loading,
  error,
  searchByCityThunk,
  searchByCity,
  sorted,
  filter,
}) => {
  useEffect(() => {
    searchByCityThunk();
    // eslint-disable-next-line
  }, []);

  // можно было создать свой хук и импортировать его сюда, но не было времени

  const sortFlights = useCallback(() => {
    if (!flights || !sorted) return flights;

    let sortedFlights = [...flights];
    sortedFlights = sortedFlights.sort((a, b) => {
      const amountA = a.flight.price.total.amount;
      const amountB = b.flight.price.total.amount;
      const timeA = a.flight.legs[0].duration;
      const timeB = b.flight.legs[0].duration;
      if (sorted === "up") return amountA - amountB;
      if (sorted === "down") return amountB - amountA;
      return timeA - timeB;
    });

    return sortedFlights;
  }, [flights, sorted]);

  useEffect(() => {
    const sortedFlights = sortFlights();
    sortedFlights && searchByCity(sortedFlights);
  }, [sortFlights, searchByCity]);

  const renderFlightCards = () => {
    let flightsToRender = [...flights];
    const { noTransfer, to, from } = filter;
    if (noTransfer || to || from) {
      flightsToRender = flightsToRender.filter((item) => {
        const fromPrice = +item.flight.price.total.amount >= (from || 0);
        const toPrice = +item.flight.price.total.amount <= (to || Infinity);

        let keepIt = fromPrice && toPrice;
        if (noTransfer) keepIt = item.flight.legs[0].segments.length === 1;

        return keepIt;
      });
    }
    return flightsToRender.map((item) => {
      return <FlightCard key={item.flightToken} item={item} />;
    });
  };

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error occured</h1>;

  return <div className={styles.SearchResults}>{renderFlightCards()}</div>;
};

const mapStateToProps = (state) => {
  return {
    flights: state.search.flights,
    loading: state.search.loading,
    error: state.search.error,
    filter: state.search.filter,
    sorted: state.search.sorted,
  };
};

export default connect(mapStateToProps, { searchByCityThunk, searchByCity })(
  SearchResults
);
