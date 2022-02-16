import './App.css';

import { useState, useMemo, useCallback} from 'react';
import  Header from './components/Header' // header componentini gösterip import ettik


function App() {
const [number, setNumber] = useState(0);
const [text, setText] = useState("");

const increment = useCallback(() => {
   setNumber(number + 1);
},[number]) ;
 
  return (
    <div className="App">
      <Header increment={increment} />

      <hr />

      <h1>{number}</h1>
      
      <br />
      <br />

      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}



export default App;
