import {useState} from 'react'
import Pregunta from "./component/Pregunta";
import Formulario from './Formulario';

function App() { 

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [verpregunta, setPregunta] = useState(true);

  return (
    <div className='container'>
      <header>
        <h1>Presupuesto</h1>
        <div className='contenido-principal contenido'>
          { verpregunta ?  (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario/>
              </div>
              <div className='one-half column'>
              2
              </div>
            </div>
          ) }    
        </div>  
      </header>
    </div>
    
  );
}

export default App;
