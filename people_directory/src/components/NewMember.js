import { useState } from "react";

const NewMember = ({addNewMemberButton}) => {

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [employeeNumber, setEmployeeNumber]= useState(0);

    const handleFormSubmit = (event) =>{
        event.preventDefault(); // default is to refresh the page

        const newMember = {
            name: name,
            email: email,
            employeeNumber: employeeNumber
        }
        //add it to the collection of things we have in state^^
        // create an new object based on what the user is input

        setName("")
        setEmail("")
        setEmployeeNumber(0)

        // when we click the form to submit, the boxes will reset and become empty

        addNewMemberButton(newMember);
        // pass the new object into the form and will update(and appear on screen)

    }
// create what happens when the form is submitted^^

    return (

        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                     type="text" 
                     id="name" 
                    value={name}
                    onChange={(event) => setName(event.target.value)} 
                    />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} // this allows the info entered to be saved?
                    />

                <label htmlFor="employeeNumber">Employee No:</label>
                <input 
                type="number" 
                id="employeeNumber" 
                value={employeeNumber}
                onChange={(event) => setEmployeeNumber(event.target.value)}
                /> 
                <input type="submit"value="Add new member" />
            </form>

        </>
        
    )


}

export default NewMember;