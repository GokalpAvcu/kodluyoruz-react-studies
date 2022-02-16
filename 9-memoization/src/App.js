import './App.css';

import { useState, useMemo } from 'react';
import  Header from './components/Header' // header componentini gösterip import ettik


function App() {
const [number, setNumber] = useState(0);

//arrow function yazdık
const data = useMemo(() => {
  return { name:"Gökalp", number};
},[number]) //dependency array verdik, iceride return islemini yaptık header componenti tekrar tekrar render edilmeyecek 



 // header'a kosul tanimladik, number 5'den kücükse herzaman sifir gondersin degilse direkt number gondersin diye degistirdim
  return (
    <div className="App">
      <Header data={data}/>  

      <hr />

      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      
    </div>
  );
}

export default App;
