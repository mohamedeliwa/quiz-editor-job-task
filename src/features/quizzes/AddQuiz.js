import { useState } from "react";
import { useDispatch } from "react-redux";
import { QuizManipulation } from "../../components/QuizManipulation";
import { quizAdded } from "./quizzesSlice";

export const AddQuiz = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveQuizClicked = () => {
    if (title && content) {
      dispatch(quizAdded(title, content));
    }
  };

  return (
    <section>
      <h2>Add a New Quiz</h2>
      {/* passing the initial state of a new quiz*/}
      <QuizManipulation
        quiz={{
          id: "",
          title: "first quiz",
          score: "N/A",
          questions_answers: [
            {
              id: 53,
              text: "question 1 text",
              feedback_false: "question 1 false feedback",
              feedback_true: "question 1 true feedback",
              answer_id: null,
              answers: [
                {
                  id: 122,
                  is_true: false,
                  text: "question 1 answer 1 false",
                },
                {
                  id: 123,
                  is_true: false,
                  text: "question 1 answer 2 false",
                },
                {
                  id: 124,
                  is_true: true,
                  text: "question 1 answer 3 true",
                },
                {
                  id: 125,
                  is_true: false,
                  text: "question 1 answer 4 false",
                },
              ],
            },
          ],
        }}
      />
    </section>
  );
};
