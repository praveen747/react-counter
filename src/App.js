import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  
  increment=() => {
    this.setState({
      count: this.state.count + 1 
    });
  }

  decrement=() => {
    this.setState({
      count: this.state.count - 1 
    });
  }
  render() { 
    return ( 
      <div>
        <h1>Counter App</h1>
        <button type="primary" onClick = {this.increment}>+</button>
        <button type="primary" onClick = {this.decrement}>-</button>
        <h2>{this.state.count}</h2>
      </div>
     );
  }
}
 
export default App;