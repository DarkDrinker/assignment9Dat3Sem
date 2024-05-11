import { useEffect, useState } from "react";

function BookForm({blankBook, bookToEdit, mutateBook}) {

    const [book, setBook] = useState({...bookToEdit});
    
    useEffect(() => {
        setBook(bookToEdit);
    }, [bookToEdit]);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.id;
        setBook({...book, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit', book);
        mutateBook(book); 

    }

    return (
        <div>
            <h1>Edit Person</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="isbn">ISBN</label>
                    <input id="isbn" type="number" onChange={handleChange} value={book.isbn} />
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" onChange={handleChange} value={book.title}  />
                    <label htmlFor="subtitle">Subtitle</label>
                    <input id="subtitle" type="text" onChange={handleChange} value={book.subtitle} />
                    <label htmlFor="author">Author</label>
                    <input id="author" type="text" onChange={handleChange} value={book.author}  />
                    <label htmlFor="publisher">Publisher</label>
                    <input id="publisher" type="text" onChange={handleChange} value={book.publisher}  />
                    <label htmlFor="published">Published</label>
                    <input id="published" type="year" onChange={handleChange} value={book.published}  />
                    <label htmlFor="pages">Pages</label>
                    <input id="pages" type="number" onChange={handleChange} value={book.pages}  />
                    <label htmlFor="website">Website</label>
                    <input id="website" type="link" onChange={handleChange} value={book.website}  />
                    <button className="btn btn-warning" type="Add">Update</button>
                    <button className="btn btn-danger" onClick={()=>setBook(blankBook)}>Reset</button>

                </form>
        </div>
    );
}

export default BookForm;