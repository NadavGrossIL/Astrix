import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SingleCharacter} from "./features/characters/SingleCharacter";
import {CharactersList} from "./features/characters/CharactersList";

export const ALL_CHARACTERS_PATH = "characters";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path={ALL_CHARACTERS_PATH} element={<CharactersList/>}/>
                        <Route path=":characterId" element={<SingleCharacter/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
