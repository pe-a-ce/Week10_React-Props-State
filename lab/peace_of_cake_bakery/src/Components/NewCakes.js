import { useState } from "react";

const NewCakes = ({addNewCakeButton}) => {


    const [cakeName, setCakeName]= useState("");
    const [ingredients, setIngredients]= useState("");
    const [rating, setRating]= useState(0);

    const handleFormSubmit = (event) =>{
        event.preventDefault(); // default is to refresh the page

        const newCake = {
            cakeName:  cakeName,
            ingredients: ingredients,
            rating: rating
        }
        //add it to the collection of things we have in state^^
        // create an new object based on what the user is input

        setCakeName("")
        setIngredients("")
        setRating(0)

        // when we click the form to submit, the boxes will reset and become empty

        addNewCakeButton(newCake);

}

return (


<>
<form onSubmit={handleFormSubmit}>
    <p>
    <legend>Sumbit a new cake recipe</legend>
    </p>
    <p>
    <label htmlFor="cake">Cake Name:</label>
    <input 
         type="text" 
         id="name" 
        value={cakeName}
        onChange={(event) => setCakeName(event.target.value)} 
        />
    </p>
    <p>
    <label htmlFor="ingredients">Ingredients needed:</label>
    <input 
        type="text" 
        id="ingredients" 
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)} // this allows the info entered to be saved?
        />
    </p>
    <p>
    <label htmlFor="cakerating">Difficulty Rating:</label>
    <input 
    type="number" 
    id="rating" 
    value={rating}
    onChange={(event) => setRating(event.target.value)}
    /> 
    </p>
    <input type="submit"value="Add new cake submission" />
</form>
</>
)
}

export default NewCakes;