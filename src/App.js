import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'abc1', name: 'Max', age: '28'},
      {id: 'abc2', name: 'Jess', age: '22'},
      {id: 'abc3', name: 'Manu', age: '29'}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    person[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () =>{
    const doesShow  = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
      </div> 
      );
      style.backgroundColor = 'red';
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
