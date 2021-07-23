import {useState} from 'react';

const Formulario = () => {


    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0); 

    const agregarGastos = e =>{
        e.preventDefault();

        //validar

        //construir el gasto

        //pasar gasto a componente principal.

        //reset del form
    }
    return (
        <form
            onSubmit={agregarGastos}
        >
            <h2>Agrega tus gastos aquí</h2>

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

export default Formulario
