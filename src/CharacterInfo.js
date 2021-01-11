import React from "react";
import "./CharacterInfo.css";

function CharacterInfo() {
  return (
    <div className="characterInfo">
      <div className="characterInfo__top">
        <h4>Character Info</h4>
      </div>
      <div className="characterInfo__row">
        <p>English</p>
        <p>Part of speech</p>
        <p>HSK level</p>
      </div>
      <div className="characterInfo__row characterInfo__row--dark">
        <p>Traditional</p>
      </div>
      <div className="characterInfo__row">
        <p>Pinyin</p>
      </div>
    </div>
  );
}

export default CharacterInfo;
