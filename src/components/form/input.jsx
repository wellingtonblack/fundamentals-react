import React, {useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  const [name, setName] = useState('Pedro')

  return (
    <>
    <h3>{name}</h3>
      <input type="text" value={name} 
        onChange={e => setName(e.target.value)}
      />
    </>
  )
}