import axios from 'axios';
import { CONSULTA_API_SUCCESS, CONSULTA_API_ERROR } from "../types";

export  const categoriasAction = () =>{
    return async (dispatch) =>{
        try{
            const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
            dispatch(consultarCategorias(result.data.drinks))
            //console.log(result.data.drinks)
        }
        catch(error){
            dispatch(consultaError(Error));
        }
    }
}


const consultarCategorias = (data) =>({
    type: CONSULTA_API_SUCCESS,
    payload: data
});

const consultaError = (error) => ({
    type: CONSULTA_API_ERROR,
    payload: error
});