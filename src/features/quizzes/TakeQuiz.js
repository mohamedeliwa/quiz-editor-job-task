import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./TakeQuiz.module.css";

const TakeQuiz = () => {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState({});

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
    setCounter((counter) => counter + 1);
    setQuestion(quiz.questions_answers[counter + 1]);
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
                    [e.target.id]: e.target.value,
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
          onClick={() => {
            console.log("finsihed");
            console.log({ answers });
          }}
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
