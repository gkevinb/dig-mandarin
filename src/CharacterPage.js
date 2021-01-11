import React from "react";
import "./CharacterPage.css";
import Search from "./Search";
import CharacterInfo from "./CharacterInfo";
import calligraphy from "./calligraphy.png";
import HanziWriter from "hanzi-writer";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

function About() {
  // const HanziWriter = require("hanzi-writer");
  console.log(HanziWriter);
  const demo = () => {
    var writer = HanziWriter.create("character-target-div", "我", {
      width: 100,
      height: 100,
      padding: 5
    });
  };

  // console.log(writer);
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
      <div className="characterPage__main">
        <h3>Character</h3>
        <div className="characterPage__strokeContainer">
          <div className="strokes">
            <div id="character-target-div"></div>
          </div>
          <div className="sound-icon">
            <VolumeUpIcon fontSize="large" style={{ color: "#FF0017" }} />
          </div>
        </div>
        <CharacterInfo />
        <button onClick={demo}>Click</button>
      </div>
    </div>
  );
}

export default About;
