import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [];

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    quizAdded: (quizzes, action) => {
      quizzes.push(action.payload);
    },
    quizUpdated: {
      reducer(quizzes, action) {
        const { id, title, description, url, score, questions_answers } =
          action.payload;
        const existingquiz = quizzes.find((quiz) => quiz.id === id);
        if (existingquiz) {
          existingquiz.title = title;
          existingquiz.score = score;
          existingquiz.description = description;
          existingquiz.url = url;
          existingquiz.questions_answers = questions_answers;
        }
      },
      prepare(id, title, description, url, score, questions_answers) {
        return {
          payload: {
            id,
            title,
            description,
            url,
            score,
            questions_answers,
          },
        };
      },
    },
  },
});

export const { quizAdded, quizUpdated } = quizzesSlice.actions;

export default quizzesSlice.reducer;
