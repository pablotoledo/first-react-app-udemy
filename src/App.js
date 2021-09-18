import logo from './logo.svg';
import './App.css';
import HolaMundo, {AdiosMundo} from './components/HolaMundo';
import AdiosMundoCruel from './components/AdiosMundoCruel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <AdiosMundoCruel />
      </header>
    </div>
  );
}

export default App;
