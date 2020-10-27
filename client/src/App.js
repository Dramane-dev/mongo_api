import logo from './logo.svg';
import './App.css';
import TestApiMongo from './TestApiMongo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestApiMongo />
      </header>
    </div>
  );
}

export default App;
