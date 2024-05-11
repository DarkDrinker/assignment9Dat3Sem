import './styles/App.css'
import React from 'react';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import { useState, useEffect } from 'react';
import { fetchData } from './util/persistence';

const blankPerson = {"id": '', "name": '', "age": '', "email": '', "gender": ''}

function App() {
  const [persons,  setPersons] = useState([]);
  const [personToEdit,  setPersonToEdit] = useState(blankPerson);
  const APIURL = "http://localhost:3000/api";

  function editPerson(person) {
    //edit person
    setPersonToEdit(person);
  }

  function getPersons(callback) { 
    fetchData(APIURL, callback);
  }

  function deletePersonById(personId) {
    //delete person by id
    fetchData(`${APIURL}/${personId}`, ()=>{}, 'DELETE') 
    setPersons(persons.filter((person) => person.id !== personId));
  }

  function mutatePerson(person) {
    //update person
    if(person.id != ''){
      // put
      console.log('update person');
      updatePerson(person);
    } else {
      // post
      console.log('create person');
      createPerson(person);
    }
  }

  function createPerson(person) {
   const{ id = parseInt(persons.reduce((p1, p2) => p1.id > p2.id ? p1.id : p2.id)) + 1 , ...personWithOutId} = person;
    fetchData(`${APIURL}`, (withIdPerson) => setPersons([...persons, withIdPerson]), 'POST', personWithOutId);
    console.log(person);
  }

  function updatePerson(person) {
    fetchData(`${APIURL}/${person.id}`, 
    (person) => 
      {setPersons(persons.map((p) => (p.id === person.id ? {...person} : p)));
    }, 'PUT', person);
  }

  useEffect(() => {
    //get all persons
    getPersons((data) => setPersons(data));
  }, []);
  
  return (
    <div className='Root'>
      <div className='JsonServerExcerise'>
      <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}/>
      <PersonList Persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>
    
      </div>

    </div>
  );
}

export default App;