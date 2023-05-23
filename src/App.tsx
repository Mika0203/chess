import Board from './components/Board';
import usePieceValue from './hooks/usePieceValue';

function App() {
  const value = usePieceValue();

  return (
    <div className="App">
      <Board />
      <div>
        White : {value.W}
      </div>
      <div>
        Black : {value.B}
      </div>

    </div>
  );
}

export default App;
