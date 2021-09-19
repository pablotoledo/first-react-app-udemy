import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";
import React, { useState, useEffect } from "react";

function App() {
  const userName = "Pablo Toledo";
  const edad = 29;

  const user = {
    nombre: "Pablo Toledo",
    edad: 29,
    color: "Azul",
  };

  const saludarFn = (name, edad) => {
    console.log("Hola " + name + " tiene " + edad + " años.");
    console.log(`Hola ${name} tiene ${edad} años`);
  };

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total "+contar)
  },[contar])

  const encenderApagar = () => {
    console.log("encender/apagar");
    //setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
    setContar(contar+1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche está: {stateCar ? "Encendido" : "Apagado"}</h3>
        <button onClick={encenderApagar}>Encender/Apagar</button>
        <h4>Clicks: {contar}</h4>

        <Saludar user={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
