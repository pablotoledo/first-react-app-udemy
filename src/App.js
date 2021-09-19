import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import React, {useState} from 'react';

function App() {
  const userName = "Pablo Toledo";
  const edad = 29;

  const user ={
    nombre: "Pablo Toledo",
    edad: 29,
    color: "Azul"
  }

  const saludarFn = (name,edad) => {
    console.log("Hola "+ name + " tiene "+edad+ " años.");
    console.log(`Hola ${name} tiene ${edad} años`);
  }

  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () =>{
    console.log("encender/apagar");
    //setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender/Apagar</button>


        <Saludar user={user} saludarFn={saludarFn} />

      </header>
    </div>
  );
}

export default App;
