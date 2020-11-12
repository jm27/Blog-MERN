import React from "react";

const AboutPage = () => (
  <div className="jumbotron">
    <h1 className="text-center pb-3 display-4">
      <u>About Me</u>
    </h1>
    <img
      className="rounded mx-auto d-block img-fluid img-thumbnail"
      alt="Profile-pic blog-pic"
      src="./imgs/Profile-pic.jpg"
      style={{ height: "300px;", width: "300px" }}
    ></img>
    <p className="lead font-weight-normal pl-2 mt-3 pr-2">
      "Hi<span>🖐</span>, Nice to meet you<span>😁</span>! My name is Jesus Esquer and
      I am a Full Stack Developer<span>💻</span>with a background BS in
      Business<span>💱</span>. Recently I have been working as a Front end
      developer for a startup<span>&#128170;</span>. With skills🧰 in HTML, CSS,
      JavaScript, Node.js, Express.js, React.js, SQL, MongoDB, Responsive web
      design<span>📱</span>and eager to learn more
      <span>👦</span>!"
    </p>
    <p className="lead font-weight-normal pl-2 pr-2">
      "I am passionate about web development, when I am building applications or
      doing research, I feel focus and time goes faster<span>&#9193;</span>.
      Although sometimes I can get frustrated for not being able to fix a bug,
      the feeling afterwards when the bug is fixed and the app is running
      smoothly<span>&#128640;</span>, outweighs the frustration<span>&#128588;</span>. Also learning
      new things every day motivates me to keep going. I love learning new
      technologies, applying the knowledge, and sharing what I learned{" "}
      <span>&#128171;</span>."
    </p>
    <p className="lead font-weight-normal pl-2 pr-2">
      "On my free-time, I like to spend time with my family
      <span>&#128106;</span>, play video games<span>&#127918;</span>, going on
      long walks with my dog <span>&#128041;</span>, reading books
      <span>&#128218;</span>, watching movies and series<span>&#127916;</span>."
    </p>

    <p className="lead font-weight-normal pl-2 pr-2">
      "Lets connect thru{" "}
      <a
        href="https://www.linkedin.com/in/j-esquer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      "<br></br>
      "Shoot me an{" "}
      <a
        href="mailto:jme2791@gmail.com?Subject=Hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        E-mail
      </a>
      "<br></br>
      "Check out my{" "}
      <a
        href="https://jm27.github.io/Portfolio-React/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Personal Portfolio
      </a>
      "<br></br>
      "More repos on my{" "}
      <a
        href="https://github.com/jm27"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github profile
      </a>
      "
    </p>
  </div>
);

export default AboutPage;
