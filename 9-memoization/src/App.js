import './App.css';

import { useState } from 'react';
import  Header from './components/Header' // header componentini gösterip import ettik


function App() {
const [number, setNumber] = useState(0);

 // header'a kosul tanimladik, number 5'den kücükse herzaman sifir gondersin degilse direkt number gondersin diye degistirdim
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number}/>  

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      
    </div>
  );
}

export default App;
