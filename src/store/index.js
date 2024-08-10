import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./lecturesSlice";
import quizzesReducer from "./quizzesSlice";

const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
    quizzes: quizzesReducer
  }
});

export default store;
