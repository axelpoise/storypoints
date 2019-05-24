import {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ScrumRadioGroup from "../components/ScrumRadioGroup";
import React from "react";
import { Link } from "react-router-dom";
import Result from "./Result";
import '../sass/main.scss';

export default class Guess extends Component {
    constructor(public props:any) {
        super(props);
        this.state = {
            effort: 1,
            complexity: 1,
            uncertainty: 1
        }
        this.effortHandler.bind(this)
        this.complexityHandler.bind(this)
        this.uncertaintyHandler.bind(this)
    }

    state: State;


    effortHandler = (event:any, name:string) => {
        console.log(name)
        console.log(event.target)
        this.setState({...this.state, effort: parseInt(event.target.value)});
    }

    complexityHandler = (event:any) => {

        this.setState({...this.state, complexity: parseInt(event.target.value)});
    }

    uncertaintyHandler = (event:any) => {

        this.setState({...this.state, uncertainty: parseInt(event.target.value)});
    }

    handleSubmit = () => {
        const fibonacci = [ 0.5, 1, 2, 3, 5, 8, 13, 20, 40,100];
        const score = fibonacci[this.state.complexity + this.state.effort + this.state.uncertainty]
        this.setState({...this.state, score: score})
    }

    render() {
        return (
            <div>
                <h1>Task Planner</h1>
                <h2>Effort</h2>
                <ScrumRadioGroup className="effort" name="effort" onChange={this.effortHandler}
                                 checkedValue={this.state.effort}></ScrumRadioGroup>
                <h2>Complexity</h2>
                <ScrumRadioGroup className="complexity" name="complexity" onChange={this.complexityHandler}
                                 checkedValue={this.state.complexity}></ScrumRadioGroup>
                <h2>Uncertainty</h2>
                <ScrumRadioGroup className="uncertainty" name="uncertainty" onChange={this.uncertaintyHandler}
                                 checkedValue={this.state.uncertainty}></ScrumRadioGroup>
                <Link to={{pathname: "/result", query:this.state}}><button onClick={this.handleSubmit} className="next-button">submit</button></Link>
            </div>
        )
    }
}