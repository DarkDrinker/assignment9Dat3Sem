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

  function deleteBookById(bookid) {
    //delete person by id
    fetchData(`${APIURL}/${bookid}`, ()=>{}, 'DELETE') 
    setBook(books.filter((book) => book.id !== bookid));
  }

  function mutateBook(book) {
    //update person
    if(book.id != '' && book.id != null){
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
    console.log(book.id);
    fetchData(`${APIURL}/${book.id}`, 
    (book) => 
      {setBook(books.map((p) => (p.id === book.id ? {...book} : p)));
    }, 'PUT', book);
  }

  useEffect(() => {
    //get all books
    getBooks((data) => setBook(data));
  }, []);
  
  return (
    <div className='Root'>
      <div className='JsonServerExcerise'>
      <BookForm blankBook={blankBook} bookToEdit={BookToEdit} mutateBook={mutateBook}/>
      <BookList Books={books} deleteBookById={deleteBookById} editBook={editBook} />
    
      </div>

    </div>
  );
}

export default App;

//<PersonForm blankPerson={blankPerson} personToEdit={personToEdit} mutatePerson={mutatePerson}/>
//<PersonList Persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>