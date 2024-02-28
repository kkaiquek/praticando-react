import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'aline'

  return (
    <div className="App">
      <SayMyName nome="Kaique" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="aline"
        idade="26"
        profissao="Enfermeira"
        foto="https://via.placeholder.com/150" />
    </div>
  )

}

export default App;