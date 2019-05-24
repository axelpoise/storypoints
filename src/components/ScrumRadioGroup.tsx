import React, {Component} from 'react';
import {render} from "react-dom";


export default class ScrumRadioGroup extends Component<{ name: string, checkedValue: number, onChange: any, className: any }> {

    getRadios() {
        const labels:string[] = ['--', '-', '+', '++'];

        return  labels.map((label, index) =>

           (<div key={"container" + this.props.name + "color-" + (1 + index)}>

                <input type="radio" id={this.props.name + "color-" + (1 + index)}
                       className={"color-" + (1 + index)} name={this.props.name}
                       value={index}
                       checked={this.props.checkedValue === index}
                       onChange={e => this.props.onChange(e, this.props.name)}
                       // key={"input" + this.props.name + "color-" + (1 + index)}
                />

                <label htmlFor={this.props.name + "color-" + (1 + index)}
                       // key={"label" + this.props.name + "color-" + (1 + index)}
                >
                                <span style={{color: "white"}}
                                      // key={"span" + this.props.name + "color-" + (1 + index)}
                                >
                                  <img src="check.svg" alt="Checked Icon"
                                       // key={"img" + this.props.name + "color-" + (1 + index)}
                                  />
                                </span>
                    <div className={"button-description"}
                        // key={"legend" + this.props.name + "color-" + (1 + index)}
                    >{label}</div>
                </label>


            </div>)
        );
    }

    render() {


        return (
            <div id={this.props.name} className={this.props.className}>
                {this.getRadios()}

            </div>
        )
    }
}