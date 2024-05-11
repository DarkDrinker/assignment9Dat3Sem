import './styles/App.css'
import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BooksList';



import { useState, useEffect } from 'react';
import { fetchData } from './util/persistence';

const blankBook = {"isbn": '', "title": '', "subtitle": '', "author": '', "published": '', "publisher": '', "pages": '', "description": '', "website": ''};

function App() {
  const [books,  setBook] = useState([]);
  const [BookToEdit,  setBookToEdit] = useState(blankBook);
  const APIURL = "http://localhost:3000/api";

  function editBook(book) {
    //edit person
    setBookToEdit(book);
  }

  function getBooks(callback) { 
    fetchData(APIURL, callback);
  }

  function deleteBooknByIsbn(bookisbn) {
    //delete person by id
    fetchData(`${APIURL}/${bookisbn}`, ()=>{}, 'DELETE') 
    setPersons(persons.filter((person) => person.id !== personId));
  }

  function mutateBook(book) {
    //update person
    if(book.isbn != ''){
      // put
      console.log('update book');
      updateBook(book);
    } else {
      // post
      console.log('create book');
      createBook(book);
    }
  }

  function createBook(book) {
    fetchData(`${APIURL}`, (book) => setBook([...books, book]), 'POST', book);
    console.log(book);
  }

  function updateBook(book) {
    fetchData(`${APIURL}/${book.isbn}`, 
    (book) => 
      {setBook(books.map((p) => (p.isbn === book.isbn ? {...book} : p)));
    }, 'PUT', book);
  }

  useEffect(() => {
    //get all persons
    getBooks((data) => setBook(data));
  }, []);
  
  return (
    <div className='Root'>
      <div className='JsonServerExcerise'>
      <BookForm />
      <BookList books={books}/>
    
      </div>

    </div>
  );
}

export default App;

//<PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}/>
//<PersonList Persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>