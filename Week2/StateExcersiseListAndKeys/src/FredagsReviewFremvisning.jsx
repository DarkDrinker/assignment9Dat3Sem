import './styles/App.css'
import React from 'react';

function App() {
  const name = 'John Doe';
  const age = 25;
  const users = [
    { id: 1, name: 'John Doe', age: 25, gender: 'female' },
    { id: 2, name: 'Jane Doe', age: 24, gender: 'female'},
    { id: 3, name: 'Bob Smith', age: 27, gender: 'female' },
  ];
  return (
    <div>
      <h1>Props in React</h1>
      <ChildComponent name={name} age={age} />

      <h1>Lists and keys</h1>
      <div>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          
            {users.map((user) => (
              <tr key={Math.random()}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
      each tr element in the table has a unique key prop that is used to identify each item in the list
      //because i dont know, i looked it up. it's because of performance reasons and to avoid re-rendering the entire list when an item is added or removed.
      //else react would have to fallback to slower more error-prone methods to keep track of the items in the list.
      
      //using Math.random() as a key is not recommended because it generates a new key every time the component is rendered
      //this can cause performance issues and can lead to unexpected behavior when the list is updated.
      //only use Math.random() as a key when the items in the list are static and will not change over time.

    </div>
  );
}

// props are a way of passing data from parent to child component
// props are read-only and cannot be modified by the child component
// can be any type of data (strings, numbers, objects, functions, etc).

function ChildComponent(props) {
  const { name, age } = props; //destructuring props

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

//Desctructuring props in the child component
//extracting the values from the props object
// const { name, age } = props;



export default App;