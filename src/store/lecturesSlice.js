import { createSlice } from "@reduxjs/toolkit";
import lectures from "../../public/assets/data/lectures";

const initialState = {
  lectures: lectures,
  currentLectureId: 1,
  currentSlideId: 1,
  currentView: "lecturer"
};

const lecturesSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {
    switchLecture: (state, action) => {
      state.currentLectureId = action.payload;
      const selectedLecture = state.lectures.find((lecture) => lecture.id === action.payload);
      state.currentSlideId = selectedLecture.slides[0].id;
      state.currentView = "quiz";
    },
    switchSlide: (state, action) => {
      state.currentSlideId = action.payload;
    },
    switchView: (state, action) => {
      state.currentView = action.payload;
    }
  }
});

export const { switchLecture, switchSlide, switchView } = lecturesSlice.actions;

export default lecturesSlice.reducer;
