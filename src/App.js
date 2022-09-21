import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [Email, setEmail] = useState('');
  

  const [user, setUser] = useState({});


  function handleRegister(e){
   e.preventDefault();
   alert('Register Success');
    setUser({
      nome: nome,
      idade: idade,
      Email: Email,
    })
  }
  
  return (
    <div>
      <h1> Cadastrando Usuario </h1>
      <form onSubmit={handleRegister}>
        
        <label>Nome: </label><br/>
        <input 
          placeholder='Digute seu nome' 
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
          /><br/>

        <label>Idade: </label><br/>
        <input placeholder='Digute sua idade' 
          value={idade}
          onChange={ (e) => setIdade(e.target.value) }
          /><br/>

        <label>Email: </label><br/>
        <input placeholder='Digute seu email'  
          value={Email}
          onChange={ (e) => setEmail(e.target.value) }
          /><br/>

        <button type='submit'>Registrar</button>
      </form>
      <div>
        <br/><br/>
      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.Email}</span><br/>
      </div>
      </div>
    </div>
  );
}

export default App;
