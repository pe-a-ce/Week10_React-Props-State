import lemonCake from "../Images/lemonCake.jpg";
import carrotCake from "../Images/carrotCake.jpg";
import brownies from "../Images/brownies.jpg";
import tealoaf from "../Images/tealoaf.jpg";


function CakeImages () {

    return (

        <div>
            <img src={lemonCake} alt = "" className="cakeImages"/>
             <img src={tealoaf} alt = "" className="cakeImages"/>
             <img src={brownies} alt=""className="cakeImages"/>
             <img src={carrotCake} alt=""className="cakeImages"/>

        </div>

    )
}

export default CakeImages;