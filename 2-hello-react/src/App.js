import './App.css';
import User from "./components/User";
const friends = [

];


const name= "Gökalp"
const surname= "Avcu"
const isLoggedIn = true; // isLoggedIn ile aşağıda belirttik true ise isim soyisim gelir false ise giriş yapmadınız gelir.

//asagiya friends kısmını eklemedim propTypes kismi
function App(){
    return (
    <>
    <User name="Gökalp" surname="Avcu" isLoggedIn={true} age={29}/>

    <h1>
      {isLoggedIn 
      ? ` Benim adım ${name}, soyadım ${surname} `
      : "Giriş yapmadınız."}
    
  </h1>

  </>
  );
}

export default App;



