import {useState} from 'react';

const Pregunta = () => {
   
    const [cantidad, setCantidad] = useState(0)

    //leer presupuesto fn
    const definirPresupuesto = (e) =>{
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar
    }

    return (
        <>
            <h2>¿Cuál es tu presupuesto?</h2>

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

export default Pregunta
