import {CONSULTA_API_SUCCESS, CONSULTA_API_ERROR} from "../types";

const inicialState = {
    categorias: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inicialState, action) => {
    switch (action.type) {
        case CONSULTA_API_SUCCESS:
            return {...state, categorias: action.payload}
        case CONSULTA_API_ERROR:
            return {...state, categorias: []}
        default:
                return state;
        }
    
}