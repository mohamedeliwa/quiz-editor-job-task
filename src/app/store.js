import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";

export const store = configureStore({
  reducer: {
    quizzes: quizzesReducer,
  },
});
