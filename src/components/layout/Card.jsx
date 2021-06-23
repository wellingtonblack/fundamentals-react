import React from 'react';

import './Card.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <div className='card' style={{
    borderColor: props.color || '#000'}}>
    <div className='conteudo' >
      {props.children}
    </div>
    <div className='footer' style={{
      backgroundColor: props.color || '#000', color:props.fontColor}}>
      {props.titulo}
    </div>
  </div>