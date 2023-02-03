import axios from "axios";

import { setQuote, searchQuotesSuccess } from "./quoteSlice";
const proxy = "https://cors-anywhere.herokuapp.com/";
export const fetchQuote = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${proxy}https://favqs.com/api/qotd`, {
        headers: {
          Authorization: `Token token="4c0f11d5b779a85c77405c7f1d5ff4ff"`,
        },
      });
      dispatch(setQuote(response.data.quote));
    } catch (error) {
      console.error(error);
      dispatch({
        type: "FETCH_QUOTE_ERROR",
        payload: error,
      });
    }
  };
};

export const searchQuotes = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${proxy}https://favqs.com/api/quotes?filter=${query}`,
        {
          headers: {
            Authorization: `Token token="4c0f11d5b779a85c77405c7f1d5ff4ff"`,
          },
        }
      );
      dispatch(searchQuotesSuccess(response.data.quotes));
    } catch (error) {
      console.error(error);
      dispatch({
        type: "SEARCH_QUOTES_ERROR",
        payload: error,
      });
    }
  };
};
