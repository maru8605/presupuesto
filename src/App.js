import {useState} from 'react'
import Pregunta from "./component/Pregunta";
import Formulario from './Formulario';
import Listado from './component/Listado';

function App() { 

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [verpregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]); 

  const agregarNuevoGasto = gasto => {
    setGastos([
      ...gastos,
      gasto
    ])
  }

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
                <Formulario 
                agregarNuevoGasto={agregarNuevoGasto}/>
              </div>
              <div className='one-half column'>
                <Listado
                gastos={gastos}/>
              </div>
            </div>
          ) }    
        </div>  
      </header>
    </div>
    
  );
}

export default App;
