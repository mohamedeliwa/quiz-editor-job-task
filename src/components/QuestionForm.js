import { useEffect, useState } from "react";
import styles from "./QuizManipulation.module.css";

function QuestionForm(props) {
  const [question, setQuestion] = useState({ ...props.question });

  useEffect(() => {
    setQuestion({
      ...props.question,
    });
  }, [props.question]);

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

      {/* Question 1st answer */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">1st answer:</label>
        <input
          className={styles.input}
          type="text"
          id="question1answer"
          name="question1answer"
          value={question.answers[0].text}
          onChange={(e) => {
            const answers = question.answers.slice();
            answers[0].text = e.target.value;
            setQuestion({ ...question, answers });
          }}
        />
        <input
          type="radio"
          id="0"
          name="truth"
          onChange={handleTheRightAnswer}
          checked={question.answers[0].is_true}
        />
      </div>

      {/* Question 2nd answer */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">2nd answer:</label>
        <input
          className={styles.input}
          type="text"
          id="question2answer"
          name="question2answer"
          value={question.answers[1].text}
          onChange={(e) => {
            const answers = question.answers.slice();
            answers[1].text = e.target.value;
            setQuestion({ ...question, answers });
          }}
        />
        <input
          type="radio"
          id="1"
          name="truth"
          onChange={handleTheRightAnswer}
          checked={question.answers[1].is_true}
        />
      </div>

      {/* Question 3rd answer */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">3rd answer :</label>
        <input
          className={styles.input}
          type="text"
          id="question3answer"
          name="question3answer"
          value={question.answers[2].text}
          onChange={(e) => {
            const answers = question.answers.slice();
            answers[2].text = e.target.value;
            setQuestion({ ...question, answers });
          }}
        />
        <input
          type="radio"
          id="2"
          name="truth"
          onChange={handleTheRightAnswer}
          checked={question.answers[2].is_true}
        />
      </div>

      {/* Question 4th answer */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">4th answer:</label>
        <input
          className={styles.input}
          type="text"
          id="question4answer"
          name="question4answer"
          value={question.answers[3].text}
          onChange={(e) => {
            const answers = question.answers.slice();
            answers[3].text = e.target.value;
            setQuestion({ ...question, answers });
          }}
        />
        <input
          type="radio"
          id="3"
          name="truth"
          onChange={handleTheRightAnswer}
          checked={question.answers[3].is_true}
        />
      </div>

      <input type="submit" value="Save Question" className={styles.subSubmit} />
      {" "}
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
