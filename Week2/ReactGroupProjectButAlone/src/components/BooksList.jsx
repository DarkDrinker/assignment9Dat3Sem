function BooksList({ Books, deleteBookById, editBook }) {
    return (
        //
    <table className="table table-striped" style={{display:"block", overflowX:"auto"}}>
    <thead>
        <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Subtitle</th>
        <th>Author</th>
        <th>Publisher</th>
        <th>Published</th>
        <th>Pages</th>
        <th>Description</th>
        <th>Website</th>
        </tr>
    </thead>
    <tbody>
        {Books.map((book) => (
            <tr key={book.id}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.subtitle}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.published}</td>
                <td>{book.pages}</td>
                <td>{book.description}</td>
                <td>
                    <a href={book.website} target="_blank" rel="noreferrer">
                        Link to book
                    </a>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteBookById(book.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => editBook(book)}
                    >
                        Edit
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
)}

export default BooksList;