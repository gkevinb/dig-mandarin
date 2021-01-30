import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Heading from "./Heading";
import Search from "./Search";
import About from "./About";
import CharacterPage from "./CharacterPage";
import mandarin from "./mandarin.svg";
import Admin from "./Admin";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navigation />
                        <Heading />
                        <Search main={true} />
                        <div className="content">
                            <div className="content__text">
                                <p>
                                    - Intellectual Chinese - English Dictionary
                                </p>
                                <p>
                                    - Stroke order, character decomposition,
                                    radical explanation and much more!
                                </p>
                            </div>
                            <img
                                id="mandarin-image"
                                src={mandarin}
                                alt="mandarin"
                            />
                        </div>
                        <About />
                        <CharacterPage />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
