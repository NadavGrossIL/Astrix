import React from 'react';
import './App.css';
import {Link, Outlet, useLocation} from "react-router-dom";
import {ALL_CHARACTERS_PATH} from "./index";


function App() {
    const location = useLocation();
    return (
        <div className="App">
            <h1>Rick & Morty Characters</h1>
            <h3>All the data you need to Wubba lubba dub dub! </h3>
            {location.pathname !== `/${ALL_CHARACTERS_PATH}` &&
            <Link to="/characters">View Characters</Link>
            }
            <br/>
            <br/>
            <Outlet/>
        </div>
    );
}

export default App;
