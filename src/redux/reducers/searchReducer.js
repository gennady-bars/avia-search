import {
  SEARCH_BY_CITY,
  SEARCH_BY_CITY_ERROR,
  SEARCH_BY_CITY_LOADING,
  SEARCH_FILTER,
  SEARCH_SORTED,
} from "../actions/actionTypes";

const initialState = {
  flights: null,
  loading: true,
  error: null,
  filter: {},
  sorted: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_CITY:
      return {
        ...state,
        flights: action.flights,
        loading: false,
        error: null,
        sorted: "",
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
    case SEARCH_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...action.filter },
      };
    case SEARCH_SORTED:
      return {
        ...state,
        sorted: action.sorted,
      };
    default:
      return state;
  }
};

export default searchReducer;
