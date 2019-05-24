import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import './sass/main.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Guess from "./pages/Guess";
import Result from "./pages/Result";


class App extends Component {

    render() {
        return (
            <Router>
                <Route exact path="/" component={Guess}></Route>
                <Route path="/result" component={Result}></Route>
            </Router>
        )
    }
}

export default App;
