
const Status = ({applicationsOpen, handleButtonClick}) => {

    return (
        <>
        <p>Applications are {applicationsOpen ? "open": "closed"}.</p>
        {/* TURNERY OPERATOR: condiotion, ?, what to di if tru, what to do if false
        we are going to pass applications are open as a variable, if this is true it will be oppened but if false,  */}

        <button onClick={handleButtonClick}>Open/Close Applications</button>
        {/* button to allow applications or not */}
        </>
    )
}

export default Status