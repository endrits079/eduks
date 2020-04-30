import React, { Component } from "react";
import "./Form.css";
import Input from "./input/Input";
export default class Form extends Component {
  state = {
    ...this.props.inputs,
  };
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    let inputs = [];
    for (let key in this.state) {
      inputs.push(<Input element={this.state[key].element} link={this.state[key].link} config={this.state[key].config}></Input>);
    }
    return (
      <div className="form">
        <h2 className="form-title">{this.props.title}</h2>
        {inputs}
      </div>
    );
  }
}
