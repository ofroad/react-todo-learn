import React, { Component } from 'react';
import Footer from './tyfooter.js';
import Todo from './todo.js';
import './App.css';

const explain = 'A simple react demo'
//console.log(React)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React <s>&nbsp;Todo&nbsp;</s></h1>
        </header>
        <Todo />
        <Footer tt="123" explain={explain} />
      </div>
    );
  }
}

export default App;
