import {useState} from 'react'
import Pregunta from "./component/Pregunta";

function App() { 

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className0='container'>
      <header>
        <h1>Presupuesto</h1>
        <div className='contenido-principal contenido'>
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
        </div>
        
      </header>
    </div>
    
  );
}

export default App;
