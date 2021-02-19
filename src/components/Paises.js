import React, {Fragment, useEffect} from 'react';
import Pais from './Pais';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerPaisesAction} from '../actions/paisesActions'


const Paises = () =>{

    const dispatch = useDispatch();

    useEffect( () => {
        //Consultar la api.
        const cargarPaises = () => dispatch (obtenerPaisesAction());

        cargarPaises();
    }, []);

    //obtener el state.
    const paises = useSelector(state => state.paises.paises);
    const error = useSelector(state => state.paises.error);
    const cargando = useSelector(state => state.paises.loading);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de Paises</h2>

            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error con la API  al obtener los paises</p> : null}

            {cargando ? <p className="text-center">Cargando....</p> : null}

            <div className="row">
                {paises.length === 0 ? 'No hay paises' : ( 
                   paises.map(pais => (
                    <Pais
                            key={pais.ID}
                            pais={pais}
                    />
                   )))}
                   </div>
        </Fragment>
    );
}

export default Paises;