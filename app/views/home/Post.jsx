import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Post extends Component {
  render() {
    return (
      <div>
        <p>1: {this.props.viewText} </p>
        <p>0: {this.props.postvalue} </p>
        <p>このページは{this.props.viewNum == 1 ? this.props.viewText : this.props.postvalue}</p>
        <button onClick={()=>this.props.postUp()}>切替</button>
        <div onClick={(event) => this.props.clickAction(event) }>
          クリックしてね
        </div>
      </div>
    )
  }
}

export default Post