import "./Css/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-card">
        <h1 className="projects-title">My Projects</h1>

        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-box">
            <h3>Hostel Management System</h3>
            <p>
              A Hostel Management System (HMS) is a web-based application built
              with PHP and MySQL designed to automate and streamline all hostel
              administrative operations, such as student registration, room
              allocation, fee collection, and complaint management. The system
              replaces manual record-keeping with a secure, efficient, and
              user-friendly digital platform.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">
                Live
              </a>
              <a
                href="https://github.com/shivram20/Hostel-management-system"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-box">
            <h3>Tic Tac Toe</h3>
            <p>
              Tic Tac Toe is a simple web-based game developed using HTML, CSS,
              and JavaScript. HTML creates the game structure, CSS styles the
              3×3 grid, and JavaScript controls the game logic. Players take
              turns as X and O, and the game detects wins or draws
              automatically.
            </p>
            <div className="project-links">
              <a
                href=" https://shivram20.github.io/TikTekTo_Game/"
                target="_blank"
              >
                Live
              </a>
              <a
                href="https://github.com/shivram20/TikTekTo_Game"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-box">
            <h3>Chatting Web Page</h3>
            <p>
              Real-Time Chatting Web Application is developed using HTML, CSS,
              JavaScript, Node.js, Express, and Socket.IO. HTML and CSS design
              the user interface, while JavaScript manages client-side
              interactions. Node.js with Express handles the server, and
              Socket.IO enables real-time, bidirectional message communication
              between users.
            </p>
            <div className="project-links">
              <a href="#" target="_blank">
                Live
              </a>
              <a
                href="https://github.com/shivram20/CHATTING-WEBPAGE"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-box">
            <h3>GMCA</h3>
            <p>
              This is a simple web-based website developed using HTML, CSS,
              JavaScript, AngularJS, and PHP. HTML and CSS are used for
              structure and design, AngularJS handles the frontend logic, and
              PHP manages backend processing. The website demonstrates basic
              frontend–backend interaction.
            </p>
            <div className="project-links">
              <a href="https://shivram.infinityfree.me/GMCA/#!/" target="_blank">
                Live
              </a>
              <a href="https://github.com/shivram20/gmca" target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
