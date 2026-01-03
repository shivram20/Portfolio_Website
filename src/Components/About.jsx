import "./Css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">

        {/* Left Section */}
        <div className="about-left">
          <h1>About Me</h1>
          <p>
            I am SHIVRAM, a passionate web developer who loves building
            clean, modern and responsive web applications.
          </p>

          <p>
            I focus on writing simple, reusable and efficient code using
            modern technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="about-right">
          <h2>Skills</h2>

          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>PHP & MySQL</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
