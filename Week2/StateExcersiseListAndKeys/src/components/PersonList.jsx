function PersonList({ Persons }) {
    return (
    <table className="table table-striped" style={{ margin: "auto" }}>
    <thead>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {Persons.map((person) => 
        <tr>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.age}</td>
        <td>{person.email}</td>
        <td>{person.gender}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
        </tr>
        )}
    </tbody>
    </table>
)}

export default PersonList;