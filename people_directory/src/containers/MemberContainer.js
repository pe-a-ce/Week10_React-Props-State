import MemberList from "../components/MemberList";
import NewMember from "../components/NewMember";
import Status from "../components/Status"; 
import { useState } from "react";

const MemberContainer = () => {

    const [members, setMembers] = useState([
        // by adding setMembers = use State;; it will allow the member container to handle the array differently
        //same behavior will be implemented when we add new members, something has changed and React needs to modify it
        {
            name: "Colin",
            email: "colin@brightnetwork.co.uk",
            employeeNumber: 123
        },
        {
            name: "Anna",
            email: "anna@brightnetwork.co.uk",
            employeeNumber: 234
        },
        {
            name: "Phil",
            email: "phil@brightnetwork.co.uk",
            employeeNumber: 345
        },
        {
            name: "Valeria",
            email: "valeria@brightnetwork.co.uk",
            employeeNumber: 456
        },
    ])

    const [applicationsOpen, setApplicationsOpen] = useState(true); // true is the initial value of our applications
    // const value, what updates our value = useState(initial value)
    // useState is a function; gives us a value that we can use to track the function and a function to update the current value?
    // managed by react , naming convention function will be call set and the variable name

    const addNewMember = (newMember) => {
        // passing newMember as an argument
        
        // members.push(NewMember);
        // modifies whats in the state, but not in the browser until set state has changed and everything rerenders

        setMembers([...members, newMember]);
        //SPREAD OPERATOR needs to be used to add new member to the end of the current member list

        console.log("added new Member");
    } //define the functionality for adding a new member

    const updateApplicationStatus = () => {
        console.log("updating status");
        setApplicationsOpen(!applicationsOpen) // function call; cannot just modify the variable as it would not kow that is needs to be reflected in the browser, 
        // so to re render the status, we need to set the status has changed and then react can change this
    }

    return(
        <>
        <NewMember addNewMemberButton={addNewMember}/>
        {/* maintaining the single source of truth by updating the same member list  */}

        <MemberList listOfMembers={members}/>

        <Status 
        applicationsOpen={applicationsOpen}
        handleButtonClick={updateApplicationStatus}/>

        
        
        </>
    )
}

export default MemberContainer;