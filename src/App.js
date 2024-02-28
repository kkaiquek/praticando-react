import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {
  const nome = 'aline'

  return (
    <div className="App">
      <Frase />
      <SayMyName nome="Kaique" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="aline"
        idade="26"
        profissao="Enfermeira"
        foto="https://via.placeholder.com/150" />
      <h1>teste CSS </h1>
    </div>
  )

}

export default App;