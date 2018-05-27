import React, { Component } from 'react';

class CountUp extends Component {
  render() {
    return (
      <div>
        <p>count:{this.props.count}</p>
        <button onClick={() => this.props.countUp()}>Count Up!</button>
      </div>
    )
  }
}

export default CountUp;