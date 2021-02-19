import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DetallePaisCasos from './DetallePaisCasos';

//Actions de Redux
import {verDetallePaisAction} from '../actions/paisesActions';
import {obtenerDetallePaisAction} from '../actions/paisesActions'


const DetallePais = () =>{
    //pais a ver detalle.

    const pais = useSelector(state => state.paises.paisdetalle);

    const dispatch = useDispatch();
    useEffect( () => {
        //Consultar la api.
        const cargarDetallePais = () => dispatch (obtenerDetallePaisAction(pais.Country));

        cargarDetallePais();
    }, []);


     //obtener el state.
     const paisDetalle = useSelector(state => state.paises.paisdetalleTotal);
     //console.log("paisDetalle");
     //console.log(paisDetalle);

    const error = useSelector(state => state.paises.error);

    const cargando = useSelector(state => state.paises.loading);


    
    return (
        <Fragment>
        <h2 className="text-center my-5">Registro histórico de {pais.Country}</h2>

                 
         {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error con la API  al obtener el detalle de un pais</p> : null}

         {cargando ? <p className="text-center">Cargando....</p> : null}
        

        <table className="table table-striped">
           <thead className="bg-primary table-dark">
               <tr>
                   <th scope="col">Casos activos</th>
                   <th scope="col">Casos confirmados</th>
                   <th scope="col">Muertes</th>
                   <th scope="col">Recuperaciones</th>
                   <th scope="col">Fecha</th>
               </tr>
           </thead>
           <tbody>
          
           {typeof paisDetalle === 'undefined' ? 'No hay detalle del pais' : (
               paisDetalle.map(paisdetallenumero => (
               <DetallePaisCasos
                        key={paisdetallenumero.id}
                        paisdetallenumero={paisdetallenumero}
                    />
                   ))
           )}   
           </tbody>
       </table>
    </Fragment>
    );
}

export default DetallePais;