import './App.css'

function App() {
  return (
    <div className="container-App">
      <div className='container'>
        <h1>Scrim Shop</h1>

        <input
        type="text"
        name="Nome"
        placeholder='Nome'
        className='register-input'
        />

        <input
        type="text"
        name="cost"
        placeholder='cost'
        className='register-input'
        />

        <input
        type="text"
        name="category"
        placeholder='Categoria'
        className='register-input'
        />   
      </div>
    </div>
  );
}

export default App;
