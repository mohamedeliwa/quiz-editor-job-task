import { QuizManipulation } from "../../components/QuizManipulation";

export const AddQuiz = () => {
  return (
    <section>
      <h2>Add a New Quiz</h2>
      {/* passing the initial state of a new quiz*/}
      <QuizManipulation
        quiz={{
          id: "",
          title: "",
          score: "N/A",
          questions_answers: [],
        }}
      />
    </section>
  );
};
