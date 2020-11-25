import "./App.css";
import Navigation from "./Navigation";
import Heading from "./Heading";
import Search from "./Search";
import mandarin from './mandarin.svg';

function App() {
    return (
        <div className="app">
            <Navigation />
            <Heading />
            <Search />
            <img id="mandarin-image" src={mandarin} alt="mandarin" />
        </div>
    );
}

export default App;
