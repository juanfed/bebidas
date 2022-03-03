import React, {createContext, useState} from 'react';

export const CategoriasContext = createContext();

const CategoriasProvider = (props) =>{

    const [hola, setHola] = useState('hola');

    return(
        <CategoriasContext.Provider
        value={{hola, setHola}}>
            {props.children}
        </CategoriasContext.Provider>
    )
}