import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Jess', age: '22'},
      {name: 'Manu', age: '29'}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
   // console.log('Was Clicked!');
   // Do not do: this.state.persons[0].name = 'Jessica';
   this.setState(
     {
    persons: [
      {name: newName, age: '28'},
      {name: 'Jess', age: '22'},
      {name: 'Manu', age: '10000'}
    ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons:[
          {name: 'Max' , age: '28'},
          {name: event.target.value, age: '22'},
          {name: 'Manu', age:'10000'}
        ]
      })
  }


  render() {

    return (
      <div className="App">
        <h2>Hi, I'm a React App</h2>
        <p> This is really working!</p>
        <button  onClick={() => this.switchNameHandler('Jesssssssssugr8')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/> 
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Max!!')}
          changed = {this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> 

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m an React app'))
  }
}

export default App;
