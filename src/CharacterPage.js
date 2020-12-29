import React from "react";
import "./CharacterPage.css";
import Search from "./Search";
import calligraphy from "./calligraphy.png";

function About() {
  return (
    <div className="characterPage">
      <div className="characterPage__sidebar">
        <h2>Glossary</h2>
        <Search />
        <img className="icons" src={calligraphy} alt="calligraphy" />
        <h3>字 Character</h3>
        <h3>语法 Grammar</h3>
        <h3>例子 Examples</h3>
        <h3>中风 Stroke Order</h3>
      </div>
    </div>
  );
}

export default About;
