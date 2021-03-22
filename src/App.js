import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Winner from './components/announcement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Winner />
        <Board />
      </header>
    </div>
  );
}

export default App;
