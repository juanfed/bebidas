import React from 'react';
import '../styles/formulario.css'

const Formulario = () => {
    return (
        <form className='formulario'>

            <div className='input div'  >
                <input type="text"
                placeholder='busca tu bebida'
                required
                name='nombre' />
            </div>

            <div className='input2 div'>
                <select htmlFor="categoria">
                    <option value="">- Selecciona el tipo de bebida -</option>
                </select>
            </div>
            <div className='buton'>
                <button type='submit'>Buscar bebida</button>
            </div>
        </form>
    )
}

export default Formulario