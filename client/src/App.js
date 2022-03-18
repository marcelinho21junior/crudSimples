import React, {useState} from 'react'

import './App.css'

function App() {
  const [values , setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]:value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log(values)
  }

  return (
    <div className="container-App">
      <div className='container'>
        <h1>Scrim Shop</h1>

        <input
        type="text"
        name="Nome"
        placeholder='Nome'
        className='register-input'
        onChange={handleChangeValues}
        />

        <input
        type="text"
        name="cost"
        placeholder='cost'
        className='register-input'
        onChange={handleChangeValues}
        />

        <input
        type="text"
        name="category"
        placeholder='Categoria'
        className='register-input'
        onChange={handleChangeValues}
        />  

        <button className='button' onClick={handleClickButton}>Cadastrar</button> 
      </div>
    </div>
  );
}

export default App;
