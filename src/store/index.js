import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./lecturesSlice";

const store = configureStore({
  reducer: {
    lectures: lecturesReducer
  }
});

export default store;
