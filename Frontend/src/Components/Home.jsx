import { NavLink } from "react-router-dom";
import "./Css/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        {/* Left Content */}
        <div className="home-left">
          <h1>
            RESPONSIVE <br />
            LANDING <br />
            PAGE
          </h1>

          <div className="tech-box">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="home-right">
          <h2>
            Welcome to <span>SHIVRAM</span>
          </h2>
          <p>
            Build a clean, modern and responsive website using reusable
            components and simple design.
          </p>

          <div className="home-buttons">
            <NavLink className="btn-primary" to="/projects">
              View Projects
            </NavLink>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="btn-secondary btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
