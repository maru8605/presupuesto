import {useState, useEffect} from 'react'
import Pregunta from "./component/Pregunta";
import Formulario from './Formulario';
import Listado from './component/Listado';
import Control from './component/Control';

function App() { 

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [verpregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]); 
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false)

// actualiza el restante
  useEffect(() => {
  // agrega nuevo presupuesto
    if(crearGasto){
      setGastos([
        ...gastos,
        gasto
      ])

    // resta presupuesto
    const presupuestoRestante = restante - gasto.cantidad
    setRestante(presupuestoRestante)

    // reset a false
    setCrearGasto(false)
    }
  }, [gasto, crearGasto, restante, gastos])

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
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}/>
              </div>
              <div className='one-half column'>
                <Listado
                gastos={gastos}/>
                <Control
                presupuesto={presupuesto}
                restante={restante}
                />
              </div>
            </div>
          ) }    
        </div>  
      </header>
    </div>
    
  );
}

export default App;
