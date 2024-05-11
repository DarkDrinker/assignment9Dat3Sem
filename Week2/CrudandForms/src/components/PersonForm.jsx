import { useEffect, useState } from "react";

function PersonForm({blankPerson, personToEdit, mutatePerson}) {

    const [person, setPerson] = useState({...personToEdit});
    
    useEffect(() => {
        setPerson(personToEdit);
    }, [personToEdit]);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.id;
        setPerson({...person, [name]: value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submit', person);
        mutatePerson(person); 

    }

    return (
        <div>
            <h1>Edit Person</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">id</label>
                    <input id="id" readOnly placeholder="id" value={person.id} />
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={handleChange} placeholder="name" value={person.name} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" min="1" max="120" onChange={handleChange} placeholder="age" value={person.age} />
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange} placeholder="email" value={person.email} />
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" onChange={handleChange} value={person.gender}>
                        <option defaultChecked>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <button type="Add">Update</button>
                    <button onClick={()=>setPerson(blankPerson)}>Reset</button>

                </form>

        </div>
    );
}

export default PersonForm;