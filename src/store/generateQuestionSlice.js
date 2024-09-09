import { createSlice } from "@reduxjs/toolkit";

// Initial state to store generated questions by lectureId
const initialState = {
  generatedQuestions: {}
};

const generateQuestionSlice = createSlice({
  name: "generateQuestion",
  initialState,
  reducers: {
    setGeneratedQuestions: (state, action) => {
      const { lectureId, questions } = action.payload;
      state.generatedQuestions[lectureId] = questions;
    },
    clearGeneratedQuestions: (state, action) => {
      const { lectureId } = action.payload;
      delete state.generatedQuestions[lectureId];
    }
  }
});

export const { setGeneratedQuestions, clearGeneratedQuestions } = generateQuestionSlice.actions;

export default generateQuestionSlice.reducer;
