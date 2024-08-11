import { createSlice } from "@reduxjs/toolkit";
import lectures from "../../public/assets/data/lectures";

const initialState = {
  lectures: lectures,
  currentModuleId: null, // Added to track the current module
  currentLectureId: 1,
  currentSlideId: 1,
  currentView: "lecturer"
};

const lecturesSlice = createSlice({
  name: "lectures",
  initialState,
  reducers: {
    setCurrentModule: (state, action) => {
      state.currentModuleId = action.payload;
      // Filter lectures based on the selected moduleId if you have such a structure
      state.lectures = lectures.filter((lecture) => lecture.moduleId === state.currentModuleId);
      state.currentLectureId = state.lectures[0].id; // Set the first lecture in the module as the current one
      state.currentSlideId = state.lectures[0].slides[0].id; // Set the first slide in the first lecture
    },
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

export const { setCurrentModule, switchLecture, switchSlide, switchView } = lecturesSlice.actions;

export default lecturesSlice.reducer;
