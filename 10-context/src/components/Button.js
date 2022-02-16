import { useContext } from 'react'// asagidaki context'i kullanmak icin react'in altindaki useContext ifadesini import ediyorum

import ThemeContext from '../context/ThemeContext' //kullanmak istedigim componenti dahil ettim

function Button() {
    const data = useContext(ThemeContext)
    
  return (
    <div>Button ({data})</div>
  )
}

export default Button