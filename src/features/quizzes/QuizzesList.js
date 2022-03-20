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
        <Link to={`/quizzes/${quiz.id}`} className="button muted-button">
          Take Quiz
        </Link>
      </article>
    ))
    .reverse();

  return (
    <section className="quizzes-list">
      <h2>Quizzes List</h2>
      {renderedquizzes}
    </section>
  );
};
