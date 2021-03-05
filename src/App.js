import logo from './logo.svg';
import './App.css';
import UserInterface from './UserInterface';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserInterface />
    </div>
  );
}

export default App;
