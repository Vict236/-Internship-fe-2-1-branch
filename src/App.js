
import './App.css';
import { getDatabase } from "firebase/database";

const database = getDatabase();

function App() {

  return (
    <div className="App">
      <h1>Ghb</h1>
      <button>start</button>
    </div>
  );
}

export default App;
