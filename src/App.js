import React, { Component } from 'react';
import './App.css';
import {Game} from "./components/Game";

class App extends Component {

    constructor(props) {
        super(props);
        const today = new Date();
        const timestamp = today.getTime();
        this.state = {
            user: timestamp,
        }
    }


    render() {
    return (
      <div className={"App" + " " + this.props.theme}>
          <h1>Tours de Hano&iuml;</h1>
          <Game user={this.state.user}/>
      </div>
    );
  }
}

export default App;
