
import { Component } from "react";

export class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter : {this.props.counter}</h1>
                <button className="btn btn-success" onClick={this.props.increment}>increment</button>
                <button className="btn btn-danger" onClick={this.props.decrement}>decrement</button>
            </div>
        );
    }
}
export default Counter;