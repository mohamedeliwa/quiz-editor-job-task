import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { quizUpdated } from "./quizzesSlice";
import styles from "./TakeQuiz.module.css";

const TakeQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const params = useParams();
  const quiz = useSelector((state) =>
    state.quizzes.find((quiz) => quiz.id === params.id)
  );
  const [question, setQuestion] = useState(quiz.questions_answers[counter]);

  // in case of user entered wrong quiz id
  if (!quiz) {
    return (
      <div>
        <p>This Quiz Doesn't exist!</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  } else if (!question) {
    return (
      <div>
        <p>This Quiz Doesn't contain questions!</p>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const goToNextQuestion = () => {
    if (Object.keys(answers).length === counter) {
      window.alert(`You should answer the question`);
      return;
    }
    setCounter((counter) => counter + 1);
    setQuestion(quiz.questions_answers[counter + 1]);
  };

  const calculateAndUpdateScore = () => {
    if (Object.keys(answers).length === 0) {
      window.alert(`You should answer the question`);
      return;
    }
    let score = 0;
    for (const key of Object.keys(answers)) {
      const question = quiz.questions_answers.find(
        (question) => question.id == key
      );

      const correctAnswer = question.answers.find((answer) => answer.is_true);
      if (correctAnswer.id == answers[key]) {
        score++;
      }
    }
    setScore(score);
    window.alert(
      `You've scored ${score} out of ${quiz.questions_answers.length}`
    );
    dispatch(quizUpdated(quiz.id, quiz.title, score, quiz.questions_answers));
    navigate("/");
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{`Question no. ${counter + 1}`}</p>

      {/* Question are displayed here one by one */}
      <div key={question.id} className={styles.answerSheetContainer}>
        <p>{question.text}</p>
        {question.answers.map((answer) => {
          return (
            <div key={answer.id}>
              <input
                type="radio"
                id={answer.id}
                name="answer"
                value={answer.id}
                onChange={(e) => {
                  setAnswers({
                    ...answers,
                    [question.id]: e.target.value,
                  });
                }}
              />
              <label htmlFor={answer.id}>{answer.text}</label>
            </div>
          );
        })}
      </div>

      {/* handle transitions between questions */}
      {counter == quiz.questions_answers.length - 1 ? (
        <input
          className={styles.button}
          type="button"
          value={"Finish"}
          onClick={calculateAndUpdateScore}
        />
      ) : (
        <input
          className={styles.button}
          type="button"
          value={"Next"}
          onClick={goToNextQuestion}
        />
      )}
    </div>
  );
};

export default TakeQuiz;
