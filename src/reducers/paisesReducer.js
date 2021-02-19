//Cada Reducer tienen su propio state.
import {
    COMENZAR_DESCARGA_PAISES, 
    DESCARGA_PAISES_EXITO,
    DESCARGA_PAISES_ERROR,

    COMENZAR_DESCARGA_DETALLEPAIS, 
    DESCARGA_DETALLEPAIS_EXITO, 
    DESCARGA_DETALLEPAIS_ERROR, 

    OBTENER_PAIS_DETALLE,
    PAIS_DETALLE_EXITO, 
    PAIS_DETALLE_ERROR
}from '../types'

const initialState = {
    paises: [],
    error: null,
    loading: false,
    paiseditar: null
}


export default function (state = initialState, action) {
    //Aca iran todos los case  que indicaran lo que pasara en la aplicacion.

    switch(action.type){

        case COMENZAR_DESCARGA_PAISES:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_PAISES_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                paises : action.payload
            }
        case DESCARGA_PAISES_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
        }
        case OBTENER_PAIS_DETALLE:
            return{
                ...state,
                paisdetalle: action.payload
        }
        case COMENZAR_DESCARGA_DETALLEPAIS:
            return{
                ...state,
                loading: action.payload
            }
        case DESCARGA_DETALLEPAIS_EXITO:
            return{
                ...state,
                paisdetalleTotal: action.payload,
                loading: false,
                error: false,
            }
        case DESCARGA_DETALLEPAIS_ERROR:
            return{
                ...state,
                loading: false,
                error: true,
            }
        default:
            return state;
    }
}