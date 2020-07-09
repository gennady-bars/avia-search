import {
  SEARCH_BY_CITY_LOADING,
  SEARCH_BY_CITY,
  SEARCH_BY_CITY_ERROR,
  SEARCH_FILTER,
  SEARCH_SORTED,
} from "./actionTypes";
const { result } = require("../../mockDB/flights.json");

export const searchByCityThunk = (from, to) => {
  return async (dispatch) => {
    dispatch(searchByCityLoading());
    try {
      // const res = await axios.get(url, {from, to})
      const flights = [...result.flights];
      dispatch(searchByCity(flights));
    } catch (error) {
      dispatch(searchByCityError(error));
    }
  };
};

export const searchSorted = (sorted) => {
  // console.log(sorted);
  
  return {
    type: SEARCH_SORTED,
    sorted,
  };
};

export const searchByCity = (flights) => {
  return {
    type: SEARCH_BY_CITY,
    flights,
  };
};

export const searchByCityError = (error) => {
  return {
    type: SEARCH_BY_CITY_ERROR,
    error,
  };
};

export const searchByCityLoading = () => {
  return {
    type: SEARCH_BY_CITY_LOADING,
  };
};

export const searchFiltered = (filter) => {
  return {
    type: SEARCH_FILTER,
    filter,
  };
};
