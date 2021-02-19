import React from 'react';
import {Link, useHistory} from 'react-router-dom';

//Redux
import {useDispatch} from 'react-redux';
import {obtenerPaisDetalle} from '../actions/paisesActions';

const Pais = ({pais}) => {
    const {ID, Country, CountryCode, TotalConfirmed, TotalDeaths, TotalRecovered} = pais

    const dispatch = useDispatch();
    const history = useHistory();//habilitar history para redireccion.
    
    //function que redirige de forma programada.
    const redireccionarDetalle = pais => {
        dispatch(obtenerPaisDetalle(pais));
        
        history.push(`paises/detallepais/${CountryCode}`);
    }

    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <p>Pais: {Country}</p>
                <p>Confirmados: {TotalConfirmed}</p>
                <p>Muertos: {TotalDeaths}</p>
                <p>Recuperados: {TotalRecovered}</p>
                <p className="acciones text-center">
                    <button type="button" className="btn btn-primary mr-2" onClick={() => redireccionarDetalle(pais)}>Ver Detalle</button>
                </p> 
            </div>
        </div>
    );
}

export default Pais;