import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { consultarCategoriasAction } from '../redux/actions/CategoriasAction';
import '../styles/formulario.css'

const Formulario = () => {
    const {categorias} = useSelector((state) => state.categorias);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(consultarCategoriasAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(categorias);
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