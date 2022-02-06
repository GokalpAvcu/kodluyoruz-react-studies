import {useState} from "react"

function App() {
  const [name, setName ] = useState('Gökalp');
  const [age, setAge] = useState(23);
  return (
    <div className="App">
  <h1>Merhaba {name}!</h1>
    <h2>{age}</h2>
  <button onClick={() => setName("Tayfun")}>Change name</button>
  <button onClick={() => setAge("25")}>Change age</button>
    </div>
  );
}

export default App;
