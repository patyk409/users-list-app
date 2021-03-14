import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React App - User's List</h1>
      </header>
      <Users />
    </div>
  );
}

export default App;
