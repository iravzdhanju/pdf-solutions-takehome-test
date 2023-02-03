import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quote: "",
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    searchQuotesSuccess: (state, action) => {
      state.quotes = action.payload;
      state.error = null;
    },
    searchQuotesError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setQuote, searchQuotesSuccess, searchQuotesError } =
  quotesSlice.actions;
export default quotesSlice.reducer;
