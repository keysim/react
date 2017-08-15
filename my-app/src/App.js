import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './containers/form';
import FormDisplay from './containers/form-display';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>The game.</h2>
            </div>
            <Form/>
            <br />
            <hr />
            <FormDisplay />
        </div>
    );
  }
}

export default App;
