import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuizzesList } from "./features/quizzes/QuizzesList";
import { AddQuiz } from "./features/quizzes/AddQuiz";
import { EditQuiz } from "./features/quizzes/EditQuiz";
import TakeQuiz from "./features/quizzes/TakeQuiz";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<QuizzesList />} />
            <Route path="addQuiz" element={<AddQuiz />} />
            <Route path="editQuiz/:id" element={<EditQuiz />} />
            <Route path="takeQuiz/:id" element={<TakeQuiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
