import React from "react";
import "./About.css";
import pagoda from "./pagoda.png";
import dictionary from "./dictionary.png";
import calligraphy from "./calligraphy.png";

function About() {
  return (
    <div className="about">
      <div className="first-container">
        <img className="icons" src={pagoda} alt="pagoda" />
        <div className="text-container">
          <h2>Innovative yet user-friendly platform</h2>
          <p>
            Chinese learning made easy ! Learn Chinese online for free. Useful
            tips and resources on how to learn Chinese.
          </p>
        </div>
      </div>
      <div className="second-container">
        <div className="text-container">
          <h2>Enhance your Chinese skills with an Online Dictionary! </h2>
          <p>
            GoMandarin gives you the perfect guidance for learning the Chinese
            language. This innovative tool gives you an accurate and precise
            translation, character decomposition and character description,
            examples sentences, synomyms, stroke order and much more!{" "}
          </p>
        </div>
        <img className="icons" src={dictionary} alt="dictionary" />
      </div>
      <div className="third-container">
        <img className="icons" src={calligraphy} alt="calligraphy" />
        <div className="text-container">
          <h2>New to Chinese language? - not a problem! </h2>
          <p>
            Newcomers can also use this website, as creative flashcards and free
            memory games help them practice new and old characters. The site can
            also be useful for advanced learners, as they can check the
            description, pronunciation, stroke order or even interesting info at
            any time. they can find about them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
