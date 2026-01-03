import "./Css/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-card">

        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-box">
            <h3>Reservation System</h3>
            <p>
              A complete hotel reservation system with booking,
              validation and database integration.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">Live</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-box">
            <h3>Library Management</h3>
            <p>
              Library management system with ER diagram,
              CRUD operations and reports.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">Live</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-box">
            <h3>Portfolio Website</h3>
            <p>
              Personal portfolio website built using React
              with responsive modern UI.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">Live</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-box">
            <h3>Feedback Form</h3>
            <p>
              Feedback and contact form with validation
              and clean UI design.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">Live</a>
              <a href="#" target="_blank">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
