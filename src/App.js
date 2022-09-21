import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'pagar conta de luz'
  ]);

function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1> Cadastrando Usuario </h1>

      <form onSubmit={handleRegister}>
        
        <label>Nome da tarefa:</label><br/>
        <input 
          placeholder='Digute uma tarefa' 
          value={input}
          onChange={ (e) => setInput(e.target.value) }
          /><br/>
        <button type='submit'>Registrar</button>
      </form>
  
      <br/><br/>
      
      <div>
        {tarefas.map( tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
