import "./Css/About.css";

const About = () => {
  return (
    <section className="about-page">
      <h1 className="name">VASAVA SHIVRAMBHAI</h1>
      <p className="role">MCA Student | 569 Government MCA College, Maninagar,Ahmedabad</p>

      <div className="block">
        <div className="about-text">
          <p>
            I am an MCA student with a strong interest in web development and
            real-world problem solving. I enjoy building user-friendly and
            efficient applications using modern web technologies.
          </p>
        </div>

        <div className="skills">
          <h2>TECHNICAL SKILLS</h2>
          <ul>
            <li>C & Java</li>
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS & ExpressJS</li>
            <li>PHP & MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
