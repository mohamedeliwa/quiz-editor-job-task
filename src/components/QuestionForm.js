import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import styles from "./QuizManipulation.module.css";

function QuestionForm(props) {
  const [question, setQuestion] = useState({ ...props.question });

  useEffect(() => {
    setQuestion({
      ...props.question,
      id: props.question.id || nanoid(),
    });
  }, [props.question]);

  useEffect(() => {
    console.log(question.id);
  }, [question.id]);

  const questionSubmitted = (e) => {
    e.preventDefault();
    props.onFinish(question);
  };

  const handleTheRightAnswer = (e) => {
    let answers = question.answers.slice();
    answers = answers.map((answer, index) => {
      if (index == e.target.id) {
        answer.is_true = true;
      } else {
        answer.is_true = false;
      }
      return answer;
    });
    setQuestion({
      ...question,
      answers,
    });
  };

  const AnswersInputs = question.answers.map((answer, index) => {
    answer.id  = answer.id || nanoid()
    return (
      <div className={styles.inputContainer} key={index}>
        <label htmlFor="quizTitle">answer no.{index + 1}:</label>
        <input
          className={styles.input}
          type="text"
          id={`questionanswer${index + 1}`}
          name={`questionanswer${index + 1}`}
          value={answer.text}
          onChange={(e) => {
            const answers = question.answers.slice();
            answers[index].text = e.target.value;
            setQuestion({ ...question, answers: [...answers] });
          }}
        />
        <input
          type="radio"
          id={index}
          name="truth"
          onChange={handleTheRightAnswer}
          checked={question.answers[index].is_true}
        />
      </div>
    );
  });

  return (
    <form className={styles.questionForm} onSubmit={questionSubmitted}>
      {/* Question Text */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">Text:</label>
        <input
          className={styles.input}
          type="text"
          id="questionText"
          name="questionText"
          value={question.text}
          onChange={(e) => setQuestion({ ...question, text: e.target.value })}
        />
      </div>
      {/* Question true feedback */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">True feedback:</label>
        <input
          className={styles.input}
          type="text"
          id="questionTrueFeedback"
          name="questionTrueFeedback"
          value={question.feedback_true}
          onChange={(e) =>
            setQuestion({ ...question, feedback_true: e.target.value })
          }
        />
      </div>
      {/* Question false feedback */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">False feedback:</label>
        <input
          className={styles.input}
          type="text"
          id="questionFalseFeedback"
          name="questionFalseFeedback"
          value={question.feedback_false}
          onChange={(e) =>
            setQuestion({ ...question, feedback_false: e.target.value })
          }
        />
      </div>
      {AnswersInputs}
      <input
        type="submit"
        value="Save Question"
        className={styles.subSubmit}
      />{" "}
      <input
        type="button"
        value="Cancel"
        className={styles.subSubmit}
        onClick={props.onCancel}
      />
    </form>
  );
}

export default QuestionForm;
