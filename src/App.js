import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
   const [personsState, setPersonsState] = useState({
      persons: [
        {name: 'Max', age: '28'},
        {name: 'Jess', age: '22'},
        {name: 'Manu', age: '29'}
      ]
  });

  const [otherState, setOtherSate] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    // console.log('Was Clicked!');
    // Do not do: personsState.persons[0].name = 'Jessica';
    setPersonsState(
      {
     persons: [
       {name: 'Jessica', age: '28'},
       {name: 'Jess', age: '22'},
       {name: 'Manu', age: '10000'}
     ]
     });
   };
  
    return (
      <div className="App">
        <h2>Hi, I'm a React App</h2>
        <p> This is really working!</p>
        <button  onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> 

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m an React app'))
  }
export default app;