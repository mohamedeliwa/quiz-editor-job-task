import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First quiz!",
    score: 0,
    questions_answers: [
      {
        id: 53,
        text: "question 1 text",
        feedback_false: "question 1 false feedback",
        feedback_true: "question 1 true feedback",
        answer_id: null,
        answers: [
          {
            id: 122,
            is_true: false,
            text: "question 1 answer 1 false",
          },
          {
            id: 123,
            is_true: false,
            text: "question 1 answer 2 false",
          },
          {
            id: 124,
            is_true: true,
            text: "question 1 answer 3 true",
          },
          {
            id: 125,
            is_true: false,
            text: "question 1 answer 4 false",
          },
        ],
      },
    ],
  },
  { id: "2", title: "second quiz!", score: 0, questions_answers: [] },
];

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    quizAdded: (quizzes, action) => {
      quizzes.push(action.payload);
    },
    quizUpdated: {
      reducer(quizzes, action) {
        const { id, title, score, questions_answers } = action.payload;
        const existingquiz = quizzes.find((quiz) => quiz.id === id);
        if (existingquiz) {
          existingquiz.title = title;
          existingquiz.score = score;
          existingquiz.questions_answers = questions_answers;
        }
      },
      prepare(id, title, score, questions_answers) {
        return {
          payload: {
            id,
            title,
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
