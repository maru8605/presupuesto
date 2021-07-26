import {useState} from 'react';
import PropTypes from 'prop-types'
import Error from './component/Error';

const Formulario = ( {setGasto, setCrearGasto} ) => {


    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0); 
    const [error, setError] = useState(false);

    const agregarGastos = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
            setError(false);
        //construir el gasto
        const gasto = {
            nombre, 
            cantidad
        }
        gasto.id = Math.floor(Math.random() * 10000) + 1


        //pasar gasto a componente principal.
        setGasto(gasto);
        setCrearGasto(true);

        //reset del form
        guardarNombre('');
        guardarCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGastos}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto'/>  : null }

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='Ej. Transporte'
                value={nombre}
                onChange={ e => guardarNombre(e.target.value) }/>
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='Ej. 300'
                value={cantidad}
                onChange={ e => guardarCantidad(parseInt(e.target.value, 10) ) }/>
            </div>
            <input
            type='submit'
            className='button-primary u-full-width'
            value='Agregar Gasto'
            />
        </form>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario
