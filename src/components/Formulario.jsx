import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriasAction } from '../redux/actions/CategoriasAction';
import '../styles/formulario.css'

const Formulario = () => {
    const [ busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const {recetas} = useSelector((state) => state.recetas);
    const {categorias} = useSelector((state) => state.categorias);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(categoriasAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    // funcion para obtener los contenidos de los input
    const obtenerDatosBusqueda = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className='formulario'>

            <div className='input div'  >
                <input type="text"
                placeholder='busca tu bebida'
                required
                name='nombre'
                onChange={obtenerDatosBusqueda} />
            </div>

            <div className='input2 div'>
                <select htmlFor="categoria"
                name='categoria'
                onChange={obtenerDatosBusqueda}>
                    <option value="">- Selecciona el tipo de bebida -</option>
                    {categorias.map(categoria =>(
                        <option 
                        key={categoria.strCategory}
                        value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                </select>
            </div>
            <div className='buton'>
                <button type='submit'>Buscar bebida</button>
            </div>
        </form>
    )
}

export default Formulario