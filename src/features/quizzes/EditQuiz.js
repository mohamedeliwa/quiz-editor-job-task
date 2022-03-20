import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { QuizManipulation } from "../../components/QuizManipulation";

export const EditQuiz = () => {
  let params = useParams();
  const quiz = useSelector((state) =>
    state.quizzes.find((quiz) => quiz.id === params.id)
  );
  return (
    <section>
      <h2>Add a New Quiz</h2>
      {/* passing the state of the quiz*/}
      {quiz ? (
        <QuizManipulation quiz={quiz} />
      ) : (
        <p>"this quiz doesn't exist!"</p>
      )}
    </section>
  );
};
