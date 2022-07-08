
// what we want to print when we pass in a new cake object
const Cakes = ({cake}) => {;

    const {cakeName, ingredients, rating} = cake;

    const ingredientList = ingredients.map((ingredient, index) => {

        return <li key={index}>{ingredient}</li>
    })

    return (
        <div className="cakeDisplay">
        <h3>Name: {cakeName}</h3>
        <p>Ingredients you'll need: </p>
        <ul>{ingredientList}</ul>
        <p>Difficulty Rating: {rating}</p>
        <hr/>
        </div>
    )

}


export default Cakes;
