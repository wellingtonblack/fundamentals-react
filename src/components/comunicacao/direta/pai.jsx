import React from 'react';
import Filho from './filho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome={'Silva'}>Pedro</Filho>
  </div>