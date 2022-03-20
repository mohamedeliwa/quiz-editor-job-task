import { useState } from "react";
import { useDispatch } from "react-redux";
import QuestionForm from "./QuestionForm";
import styles from "./QuizManipulation.module.css";

const emptyQuestionState = {
  id: null,
  text: "",
  feedback_false: "",
  feedback_true: "",
  answer_id: null,
  answers: [
    {
      id: null,
      is_true: false,
      text: "",
    },
    {
      id: null,
      is_true: false,
      text: "",
    },
    {
      id: null,
      is_true: false,
      text: "",
    },
    {
      id: null,
      is_true: false,
      text: "",
    },
  ],
};



export const QuizManipulation = (props) => {
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState({ ...props.quiz });
  const [question, setQuestion] = useState({ ...emptyQuestionState });

  const onTitleChanged = (e) =>
    setQuiz({
      ...quiz,
      title: e.target.value,
    });

  const onSaveQuizClicked = () => {
    console.log({ props });
    console.log({ quiz });
    if (quiz.title) {
      //   dispatch(quizAdded(title, content));
    }
  };

  const questionSubmitted = (question) => {
    let isUpdatedQuestion = quiz.questions_answers.find((item) => {
      return item.id === question.id;
    });
    if (isUpdatedQuestion) {
      // incase the user is updating an exisiing question
      let questions = quiz.questions_answers.slice();
      questions = questions.map((item) => {
        if (item.id === question.id) {
          return question;
        } else {
          return item;
        }
      });

      setQuiz({
        ...quiz,
        questions_answers: [...questions],
      });
    } else {
      // in case the use is adding a new question
      setQuiz({
        ...quiz,
        questions_answers: [...quiz.questions_answers, question],
      });
    }
    setQuestion({
      ...emptyQuestionState,
    });
  };

  const passQuestionToEdit = (id) => {
    const question = quiz.questions_answers.find((item) => item.id === id);
    console.log(question);
    setQuestion({
      ...question,
    });
  };

  const handleQuestionCancelation = () => {
    setQuestion({
      ...emptyQuestionState,
    });
  };

  const AddedQuestions = quiz.questions_answers
    .map((question, index) => {
      return (
        <div className={styles.questionContainer} key={question.id}>
          <p>{question.text}</p>
          <p>{question.answers.find((answer) => answer.is_true).text}</p>
          <button onClick={() => passQuestionToEdit(question.id)}>edit</button>
          <button>delete</button>
        </div>
      );
    })
    .reverse();

  return (
    <section className={styles.container}>
      {/* the title of the Quiz */}
      <div className={styles.inputContainer}>
        <label htmlFor="quizTitle">Quiz Title:</label>
        <input
          className={styles.input}
          type="text"
          id="quizTitle"
          name="quizTitle"
          value={quiz.title}
          onChange={onTitleChanged}
        />
      </div>

      {/* Button to submit Quiz */}
      <button className={styles.submit} onClick={onSaveQuizClicked}>
        Save Quiz
      </button>

      {/* A form to add new Questions to the quiz  */}
      <p>Add a Question to the Quiz</p>
      <QuestionForm
        question={{ ...question }}
        onFinish={questionSubmitted}
        onCancel={handleQuestionCancelation}
      />
      <hr />
      {AddedQuestions}
    </section>
  );
};
