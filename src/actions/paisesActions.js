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


import clienteAxios from '../config/axios';

//Funcion que descarga los paises de la API.
export function obtenerPaisesAction(){
    return async (dispatch) => {
        dispatch (descargarPaises());

        try {
            const respuesta = await clienteAxios.get('');
            //console.log(respuesta.data.Countries);
            dispatch(descargarPaisesExitosa(respuesta.data.Countries))
        } catch (error) {
            dispatch(descargaPaisesError())
        }
    }
}


//Funciones para obtener el listados de paises.
const descargarPaises = () => ({
    type: COMENZAR_DESCARGA_PAISES,
    payload: true
})

const descargarPaisesExitosa = (paises) => ({
    type: DESCARGA_PAISES_EXITO,
    payload: paises
})

const descargaPaisesError = () => ({
    type: DESCARGA_PAISES_ERROR,
    payload: true
})




//Funcion que descarga el detalle del pais.
export function obtenerDetallePaisAction(codigoPais){
    return async (dispatch) => {
        dispatch (descargarDetallePais());

        try {
            const url = `https://api.covid19api.com/country/${codigoPais}`;
            const respuesta = await fetch(url);
            const detalle = await respuesta.json();

            dispatch(descargarDetallePaisExitosa(detalle))
        } catch (error) {
            dispatch(descargarDetallePaisError())
        }
    }
}

//Obtener detalle de un pais.
const descargarDetallePais = () => ({
    type: COMENZAR_DESCARGA_DETALLEPAIS,
    payload: true
})


export function obtenerPaisDetalle(pais)
{
    return (dispatch) =>{
        dispatch(obtenerPaisAction(pais))
    }
}

const obtenerPaisAction = (pais) => ({
    type: OBTENER_PAIS_DETALLE,
    payload: pais
})

 const descargarDetallePaisExitosa = (paisdetalle) => ({
    type: DESCARGA_DETALLEPAIS_EXITO,
    payload: paisdetalle
})

const descargarDetallePaisError = () => ({
    type:     DESCARGA_DETALLEPAIS_ERROR,
    payload: true
})