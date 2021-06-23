import React, { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  const [numeros, setNumeros] = useState(Array(props.qtd).fill(0))

  function gerarNumeroNaoRepetido(array) {
    const min = 1
    const max = 60
    const novoNumero = parseInt(Math.random() * (max - min)) + min

    return array.includes(novoNumero) 
    ? gerarNumeroNaoRepetido(array) : novoNumero;
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtd)
      .fill(0)
      .reduce((a, e) => {
        const novoNumero = gerarNumeroNaoRepetido(a)
        return [...a, novoNumero]
      }, [])
      .sort((a, b) => a - b)
      
      setNumeros(novoArray);
  }

  return (
    <>
      <div>
          <h3>Mega Sena</h3>
          <h4>{numeros.join(" - ")}</h4>
          <button
            onClick={gerarNumeros}
           >Gerar Número</button>
      </div>
    </>
  )
}