import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quoteSlice";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;
