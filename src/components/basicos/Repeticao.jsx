import React from 'react';

import produtos from '../../data/product'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  function getProdutoListItem() {
    return produtos.map(produto => {
      return (
        <li key={produto.id}>
        {produto.id} - {produto.nome} -> {produto.preco}
      </li>
      )
    })
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>
        {getProdutoListItem()}
      </ul>
    </div>
  )
}