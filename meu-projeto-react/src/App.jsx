import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Input } from './components/Input/Input'
import { useState } from 'react';
import { Counter } from './components/Counter/Counter';

function App() {
  const [nome, setNome] = useState('');
  const [senha, setSenha]= useState('');

  return (
    <>
    <div className="container">
      <Navbar />
        <h2 class="h2"> Bem-vinde, {nome === "" ? "Visitante" : nome}! </h2>       
          <div className="containerInputs">
            <label htmlFor="nome">Nome:</label>
            <Input
            type={"text"}
            placeholder={"Digite seu nome"}
            value={nome}
            onChange={(e)=>{
              setNome(e.target.value),
              console.log(e.target.value)
            }}
            />

        <div className="containerInputs">
        <label htmlFor="nome">Senha:</label>
        <Input
         type={"password"}
        placeholder={"Digite sua senha"}
        value={senha}
        onChange={(e)=>{
          setSenha(e.target.value),
          console.log(e.target.value)
        }}
        />
        </div>
        </div>
        
    </div>
    <Counter />
    </>
  );
}

export default App
