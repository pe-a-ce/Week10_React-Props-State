import Cakes from "./Cakes";

const CakeList = ({listOfCakes}) => {

        const CakeComponents = listOfCakes.map((cake,index) => {
            
            return <Cakes cake={cake} key={index} />
        });

        return (

            <>
            {CakeComponents}
            </>
        )


        }


export default CakeList;

