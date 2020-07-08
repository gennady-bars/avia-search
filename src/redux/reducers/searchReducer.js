import {
  SEARCH_BY_CITY,
  SEARCH_BY_CITY_ERROR,
  SEARCH_BY_CITY_LOADING,
} from "../actions/actionTypes";

const initialState = {
  flights: null,
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_CITY:
      return {
        ...state,
        loading: false,
        error: null,
        flights: action.flights,
      };
    case SEARCH_BY_CITY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SEARCH_BY_CITY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default searchReducer;
