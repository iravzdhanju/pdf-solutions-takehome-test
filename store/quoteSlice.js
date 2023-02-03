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
  },
});

export const { setQuote } = quotesSlice.actions;
export default quotesSlice.reducer;
