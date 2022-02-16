import { useContext } from 'react'// asagidaki context'i kullanmak icin react'in altindaki useContext ifadesini import ediyorum

import ThemeContext from '../context/ThemeContext' //kullanmak istedigim componenti dahil ettim

function Button() {
  const {theme, setTheme} = useContext(ThemeContext);
    
  
  return (
    <div>Active Theme: {theme}
    
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>

    </div>
  )
}

export default Button