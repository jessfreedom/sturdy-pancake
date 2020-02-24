import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hi, I'm a React App</h2>
        <p> This is really working!</p>
        <button>Switch Name</button>
        <Person name  = "Max" age = "28"/> 
        <Person name = "Jess" age = "22"> My Hobbies: Racing </Person>
        <Person name = "Manu" age = "29"/> 

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m an React app'))
  }
}

export default App;
