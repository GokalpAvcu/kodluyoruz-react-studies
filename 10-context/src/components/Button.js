import { useContext } from 'react'// asagidaki context'i kullanmak icin react'in altindaki useContext ifadesini import ediyorum

import ThemeContext from '../context/ThemeContext' //kullanmak istedigim componenti dahil ettim

function Button() {
    const data = useContext(ThemeContext)
    console.log(data)
  return (
    <div>Button</div>
  )
}

export default Button