import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const QuizzesList = () => {
  const quizzes = useSelector((state) => state.quizzes);

  const renderedquizzes = quizzes
    .map((quiz) => (
      <article className="quiz-excerpt" key={quiz.id}>
        <h3>{quiz.title}</h3>
        <p className="quiz-content">
          {quiz.questions_answers.length} questions
        </p>
        <p className="quiz-content">score : {quiz.score}</p>
        <p className="quiz-content">{quiz.description}</p>
        <p className="quiz-content">
          {quiz.url && (
            <a href={quiz.url} target="_blank">
              youtube
            </a>
          )}
        </p>
        <Link to={`/takeQuiz/${quiz.id}`} className="button muted-button">
          Take Quiz
        </Link>{" "}
        <Link to={`/editQuiz/${quiz.id}`} className="button muted-button">
          Edit Quiz
        </Link>
      </article>
    ))
    .reverse();

  return (
    <section className="quizzes-list">
      <h2>Quizzes List</h2>
      {renderedquizzes.length > 0 ? (
        renderedquizzes
      ) : (
        <p>No quizzes yet, create a new one!</p>
      )}
    </section>
  );
};
