import './styles/App.css'
import React from 'react';
import ListDemo from './components/ListDemo'
import IntervalCount from './components/Clock';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import { useState, useEffect } from 'react';
import { fetchData } from './util/persistence';

function App() {
  const [persons,  setPersons] = useState([]);
  const APIURL = "http://localhost:3001/api";

  function getPersons(callback) {
    fetchData(APIURL, callback);
  }

  useEffect(() => {
    //get all persons
    getPersons((data) => setPersons(data));
  }, []);
  
  return (
    <div className='Root'>
      <h1>React Week 2</h1>
      <div>
      
          <ListDemo />

          <p>Q1: What is the purpose of the key value, which must be given to individual rows in a react-list?</p>
          <p>A1: The key value is used by React to efficiently update and re-render the list items. It helps React identify which items have changed, been added, or been removed.</p>

          <p>Q2: It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?</p>
          <p>A2: If your data doesn't have a unique ID, you can generate a unique value using a library like `uuid` or by combining multiple properties to create a unique identifier.</p>

          <p>Q3: What is the difference(s) between state and props?</p>
          <p>A3: Props are used to pass data from a parent component to a child component, while state is used to manage internal component data that can change over time.</p>

          <p>Q4: For which scenarios would you use props, and for which would you use state?</p>
          <p>A4: Props are used when you want to pass data from a parent component to a child component, and the data doesn't change within the child component. State is used when you want to manage and update data within a component.</p>

          <IntervalCount />
      
      </div>
      <div className='JsonServerExcerise'>
      <PersonList Persons={persons}/>
        <PersonForm />
      </div>

    </div>
  );
}

export default App;