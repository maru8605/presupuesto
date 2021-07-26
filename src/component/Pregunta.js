import {useState} from 'react';
import PropTypes from 'prop-types'
import Error from './Error';

const Pregunta = ( {setPresupuesto, setRestante,  setPregunta} ) => {
   
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    //leer presupuesto fn
    const definirPresupuesto = (e) =>{
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false)
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
    }

    return (
        <>
            <h2>¿Cuál es tu presupuesto?</h2>

            {error ? <Error mensaje='Ingrese una  suma valida'/> : null}

            <form
            onSubmit={agregarPresupuesto}>
                <input
                type='number'
                className='u-full-width'
                placeholder='$'
                onChange={definirPresupuesto}/>
                <input
                type='submit'
                className='button-primary u-full-width'
                value='definir presupuesto'/>
            </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}

export default Pregunta
