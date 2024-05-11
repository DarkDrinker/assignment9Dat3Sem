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
                    <label htmlFor="id">ISBN</label>
                    <input id="id" readOnly placeholder="ISBN" />
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={handleChange} placeholder="name"  />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" min="1" max="120" onChange={handleChange} placeholder="age"  />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange} placeholder="email"  />
                    <button type="Add">Update</button>
                    <button onClick={()=>setBook(blankBook)}>Reset</button>

                </form>

        </div>
    );
}

export default BookForm;