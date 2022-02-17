import './App.css';
import {useEffect, useState} from 'react'
import {init, subscribe} from "./socketApi"
import Palatte from "./components/Palatte"

function App() {
  const [æctiveColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    init();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);

  return (
    <div className="App" style={{backgroundColor: activeColor}}>

      <Palatte/>
   
    </div>
  );
}

export default App;
