import { createSlice } from "@reduxjs/toolkit";
import lectures from "../../public/assets/data/lectures";

const initialState = {
  lectures: lectures,
  currentLectureId: 1,
  currentSlideId: 1
};

const lecturesSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {
    switchLecture: (state, action) => {
      state.currentLectureId = action.payload;
      const selectedLecture = state.lectures.find((lecture) => lecture.id === action.payload);
      state.currentSlideId = selectedLecture.slides[0].id;
    },
    switchSlide: (state, action) => {
      state.currentSlideId = action.payload;
    }
  }
});

export const { switchLecture, switchSlide } = lecturesSlice.actions;

export default lecturesSlice.reducer;
