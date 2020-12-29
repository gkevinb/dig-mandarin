import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import Heading from "./Heading";
import Search from "./Search";
import About from "./About";
import CharacterPage from "./CharacterPage";
import mandarin from "./mandarin.svg";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Heading />
      <Search />
      <div className="content">
        <div className="content__text">
          <p>- Intellectual Chinese - English Dictionary</p>
          <p>
            - Stroke order, character decomposition, radical explanation and
            much more!
          </p>
        </div>
        <img id="mandarin-image" src={mandarin} alt="mandarin" />
      </div>
      <About />
      <CharacterPage />
    </div>
  );
}

export default App;
