import './App.css';

import { useState, useMemo } from 'react';
import  Header from './components/Header' // header componentini gösterip import ettik


function App() {
const [number, setNumber] = useState(0);
const [text, setText] = useState("");

//arrow function yazdık
const data = useMemo(() => {
  return calculateObject(number);
},[number]) //dependency array verdik, iceride return islemini yaptık header componenti tekrar tekrar render edilmeyecek 



 // header'a kosul tanimladik, number 5'den kücükse herzaman sifir gondersin degilse direkt number gondersin diye degistirdim
  return (
    <div className="App">
      <Header data={data}/>  

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br />
      <br />

      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}

function calculateObject (number) {
  console.log("Calculating...");
  for (let i=0; i<1000000; i++) {}
  console.log("Calculating completed!");

  return { name: "Gökalp", number};
}

export default App;
