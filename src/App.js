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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () =>{
    const doesShow  = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
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
      )

    }
    return (
      <div className="App">
        <h2>Hi, I'm a React App</h2>
        <p> This is really working!</p>
        <button  
          style = {style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          
      {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m an React app'))
  }
}

export default App;
