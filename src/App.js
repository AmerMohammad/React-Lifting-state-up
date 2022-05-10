import React from "react";
import { Component } from "react";
import { Counter } from "./components/Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }


  //A function for increment Button
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  //A function for Decrement Button
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>State Lifting up</h1>
          </div>
          <div className="card-body">

            {/* binding the functions  */}
            <Counter
              counter={this.state.counter}
              increment={this.increment}
              decrement={this.decrement} />
          </div>
        </div>
      </div>
    );
  }
}
