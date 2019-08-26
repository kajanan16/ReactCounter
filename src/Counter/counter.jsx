import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    const styl = { fontSize: "50px", padding: "10px 15px" };
    return (
      <div className="counter">

  <div className="center"> 
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <span className="count" style={styl}>
          {this.state.counter}
        </span>
        <div >
        <button className="reset" onClick={this.reset}>Reset</button>
        </div>

        </div>
      </div>
    );
  }

  reset() {
    this.setState({
      counter: 0
    });
  }

  increment(by) {
    this.setState({
      counter: this.state.counter + by
    });
  }
  decrement(by) {
    this.setState({
      counter: this.state.counter - by
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    const styl = { fontSize: "50px", padding: "10px 15px" };
    return (
      <div className="counter">
        <button onClick={this.increment}>{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }

 

  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by
    });
    this.props.decrementMethod(this.props.by);
  }
  
  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });
    this.props.incrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1
};
export default Counter;
