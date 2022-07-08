import Cakes from "../Components/Cakes";
import NewCakes from "../Components/NewCakes";
import CakeList from "../Components/CakeList";
import Status from "../Components/Status";
import { useState } from "react";

const CakeContainer = () => {

        const [cakes, setCakes] = useState
    ([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ])

      const [submissionsOpen, setSubmissionsOpen] = useState(true);

    const addNewCake = (newCake) => {
        
        setCakes([...cakes, newCake]);
       
        console.log("added new Cake!");
    } 

    const updateSubmissionStatus = () => {
        console.log("updating status");
        setSubmissionsOpen(!submissionsOpen)
    }

      return (

        <>
        

        <CakeList listOfCakes={cakes}/>

        <Status submissionsOpen={submissionsOpen}
        handleButtonClick={updateSubmissionStatus}/>
        
        <NewCakes addNewCakeButton={addNewCake}/>
        </>
      )





}

export default CakeContainer;

/*
TO DO TASKS
- modify search bar to be functional [filtering the recipes by name + filter is case-insensitive]
- Add in form validation so that the rating can only be the values 1 through 5, and so that an empty form cannot be submitted

*/