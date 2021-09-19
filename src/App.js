import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';


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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <Saludar user={user} saludarFn={saludarFn} />

      </header>
    </div>
  );
}

export default App;
