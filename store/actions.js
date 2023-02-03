import axios from "axios";
import { setQuote } from "./quoteSlice";
export const fetchQuote = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        " https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd",
        {
          headers: {
            Authorization: `Token token="4c0f11d5b779a85c77405c7f1d5ff4ff"`,
          },
        }
      );
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
