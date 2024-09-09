import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./lecturesSlice";
import moduleReducer from "./moduleSlice";
import questionsReducer from "./questionSlice";

const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
    modules: moduleReducer,
    questions: questionsReducer
  }
});

export default store;
