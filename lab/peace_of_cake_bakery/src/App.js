import logo from './logo.svg';
import './App.css';
import CakeContainer from './Container/CakeContainer';
import Title from './Components/Title';
import Navigation from './Components/NavBar'; 
import CakeImages from './Components/CakeImages';

function App() {
  return (
    <>
    <Title />
    <Navigation />
    <CakeImages />
    <h2> Here are some of our featured recipes!</h2>
    < CakeContainer />
    
    </>
  );
}

export default App;
