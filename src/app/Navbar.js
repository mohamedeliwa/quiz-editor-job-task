import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Quizzes Editor</h1>
        <div className="navContent">
          <div className="navLinks">
            <div className="navLinks">
              <NavLink to="/">Create a new Quiz</NavLink>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};
