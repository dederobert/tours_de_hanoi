import React, { Component } from 'react';
import './App.css';
import {Game} from "./components/Game";

class App extends Component {

  render() {
    return (
      <div className={"App" + " " + this.props.theme}>
          <h1>Tours de Hano&iuml;</h1>
          <Game/>
      </div>
    );
  }
}

export default App;
