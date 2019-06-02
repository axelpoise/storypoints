import React from 'react';
import {Link} from "react-router-dom";
import '../sass/main.scss';

type State = {
    score: number
}
export default class Result extends React.Component {
    static getInitialProps({query}: any) {

        return {query}
    }

    constructor(public props: any) {
        super(props);
        const fibonacci = [0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];
        const score = fibonacci[parseInt(this.props.location.query.complexity) + parseInt(this.props.location.query.effort) + parseInt(this.props.location.query.uncertainty)]
        this.state = {score: score};
    }

    state: State;

    nextHandler = () => {

    }

    render() {

        const widthList = ['25%', '50%', '75%', '100%']


        return (
            <div className={"result container"}>

                <div className={"box"}>
                {/*<div className="result">{this.state.score}</div>*/}
                <svg viewBox={"0 0 100 100"} preserveAspectRatio={"xMidYMid meet"}>
                    <circle cx={"50"} cy={"50"} r={"40"} fill={"white"}>
                    </circle>
                    <text fill={"black"} fontSize={"50"} x={"50%"} y={"50%"} dy={".3em"}
                          textAnchor={"middle"}>{this.state.score}</text>
                </svg>
                </div>
                {/*<div style={{textAlign: "center"}}>*/}
                {/*<p className={"color-"+ (1+parseInt(this.props.location.query.effort)) }>effort</p>*/}
                {/*<p className={"color-"+ (1+parseInt(this.props.location.query.complexity))}>complexity</p>*/}
                {/*<p className={"color-"+ (1+parseInt(this.props.location.query.uncertainty))}>uncertainty</p>*/}
                {/*</div>*/}


                {/*<div className={"chart"}>*/}

                {/*<span className={"bar5"}>effort</span>*/}
                {/*<span className={"bar" + (1+parseInt(this.props.location.query.effort))}></span>*/}

                {/*<span className={"bar5"}>complexity</span>*/}
                {/*<span className={"bar" + (1+parseInt(this.props.location.query.complexity))}></span>*/}

                {/*<span className={"bar5"}>uncertainty</span>*/}
                {/*<span className={"bar" + (1+parseInt(this.props.location.query.uncertainty))}></span>*/}

                {/*</div>*/}
                <div className={"box"}>
                <div className={"chart"}>
                    <svg viewBox={"0 0 100 65"}>

                        <text x={"0"} y={"10"} className={"result-text"}>effort</text>
                        <rect y={"12"}
                              className={"color-"+ (1+parseInt(this.props.location.query.effort))}
                              width={widthList[parseInt(this.props.location.query.effort)]}
                              height='10'></rect>

                        <text x={"0"} y={"30"} className={"result-text"}>complexity</text>
                        <rect y={"32"}
                              className={"color-"+ (1+parseInt(this.props.location.query.complexity))}
                              width={widthList[parseInt(this.props.location.query.complexity)]}
                              height='10'></rect>

                        <text x={"0"} y={"50"} className={"result-text"}>uncertainty</text>
                        <rect y={"52"}
                              className={"color-"+ (1+parseInt(this.props.location.query.uncertainty))}
                              width={widthList[parseInt(this.props.location.query.uncertainty)]}
                              height='10'></rect>

                    </svg>

                </div>
                </div>
                <div className={"box"}>
                <Link to="/">
                    <button className="next-button" onClick={this.nextHandler}>Retry</button>
                </Link>
                </div>
            </div>
        )
    }
}