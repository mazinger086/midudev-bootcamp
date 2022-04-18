import './App.css';
import Descripcion from './components/Descripcion';
import Mensaje from './components/Mensaje';


const App = () => {
  
  return (
    <div className="App">
        <Mensaje color="red" txt='Estamos trabajando'/>
        <Mensaje color="blue" txt="en curso"/>
        <Mensaje color="green" txt="de React"/>
        <Descripcion/>
    </div>
  );
}

export default App;
 