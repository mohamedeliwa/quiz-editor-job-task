## Used Tools

- [Create React App](https://github.com/facebook/create-react-app)

- [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/)

- [react-router](https://reactrouter.com/docs/en/v6)

- I didn't use any css toolkit like Bootstrap.

- I just used plain HTML and CSS

<br />

> Note: I didn't put much effort in styling, I just focused on redux logic and data management

## Project Structure

- Main page contains:

  - a list of created quizzes, and each one displays

    - title
    - description
    - score: will show "N/A" in case the quiz is not yet answered
    - youtube url
    - button to edit the quiz
    - button to take the quiz

  - a nav link to create a new quiz

  - a nav link to the home page

- create new quiz page contains:

  - fields for quiz's title, description and youtube url
  - fields to add new questions

    - text
    - true feedback
    - false feedback
    - answers text,
    - radio buttons to choose the right answer, the first is checked by deafult

  - added questions
    - will be displayed below the add questions form
    - will display the question text, and right answer
    - will display two buttons one for editing, and one for deleting the question

- edit quiz page

  - similar to the add new quiz page

- take quiz page
  - will display quiz questions one by one
  - you should answer each question
  - will show the score at the end
  - then push you back to home
  - the score will be uipdated in the quizzes list in the home page.

## To run the project

After cloning the project, In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
