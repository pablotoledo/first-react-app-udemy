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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>

        <Saludar user={user} />

      </header>
    </div>
  );
}

export default App;
