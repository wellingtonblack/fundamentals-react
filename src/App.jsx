import React from 'react';
import "./App.scss"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from'./components/comunicacao/direta/pai'
import Super from './components/comunicacao/indireta/super'
import Input from './components/form/input'
import Contador from './components/contador/contador'
import Mega from './components/mega-sena/mega'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className="cards">
      <Card titulo='#11 Mega Sena' color={'silver'} >
        <Mega qtd={8}/>
      </Card>
      <Card titulo='#10 Contador' color={'red'} >
        <Contador passo={10} valor={100} />
      </Card>
      <Card titulo='#9 Input' color={'yellow'} fontColor={"#000"}>
        <Input />
      </Card>
      <Card titulo='#8 Comunicação indireta' color={'pink'}>
        <Super sobrenome={'Costa Pereira'}/>
      </Card>
      <Card titulo='#7 Comunicação direta' color={'brown'}>
        <Pai sobrenome={'Costa Pereira'}/>
      </Card>
      <Card titulo='#6 Condicional v2' color={'#fa6900'}>
        <CondicionalComIf numero={16}/>
      </Card>
      <Card titulo='#5 Condicional v1' color={'#e94c6f'}>
        <Condicional numero={10}/>
      </Card>
      <Card titulo='#4 Repetição' color={'green'}>
          <Repeticao/>
      </Card>
      <Card titulo='#3 Componentes com filhos' color={'Blue'}>
        <ComFilhos>
          <ul>
            <li>
              Pedro Henrique
            </li>
            <li>
            João Lucas
            </li>
            <li>
            Heitor
            </li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo='#2 Componente com Parâmetro' color={'gray'}>
        <ComParametro 
        titulo='Titulo' 
        subtitulo='Subtitulo'
        />                     
      </Card>
      <Card titulo='#1 Primeiro Componente' color={'purple'}>
        <Primeiro />                        
      </Card>
    </div>
</div>
)
