import { combineReducers } from "redux";
import reducer from './consultarCategoriaReducers';

export default combineReducers({
    categorias: reducer
});