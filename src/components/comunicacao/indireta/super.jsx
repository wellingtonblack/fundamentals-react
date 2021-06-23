import React, { useState } from 'react';
import Sub from './sub'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  
    const [text, setText] = useState("Valor")
    const [num, setNum] = useState(0)

  function quandoClicar(valoGerado, texto) {
    
    setNum(valoGerado, texto)
    setText(texto)
  }
  return (
  <div>
    <h4>{text}: {num}</h4>
    <Sub onClicar={quandoClicar}></Sub>
  </div>
  )
} 
