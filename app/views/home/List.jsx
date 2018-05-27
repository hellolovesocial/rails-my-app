import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class List extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { 
      items : [
        { value : 'apple' },
        { value : 'orange' },
        { value : 'banana' },
      ]
    };
  }

  list(items){
    return items.map((_item,_key) => {
      return(
        <li key={_key}>{_item.value}</li>
      )
  })
  }

  render(){
    return(
      <ul className="App-list">
        {this.list(this.state.items)}
      </ul>
    )
  }
}

export default List;