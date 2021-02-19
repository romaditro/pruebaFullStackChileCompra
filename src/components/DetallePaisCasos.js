import React from 'react';
import {Link, useHistory} from 'react-router-dom';


const DetallePaisCasos = ({paisdetallenumero}) => {
    const {ID, Active, Confirmed, Deaths, Recovered, Date} = paisdetallenumero
  
    return (
        <tr>
            <td>{Active}</td>
            <td>{Confirmed}</td>
            <td>{Deaths}</td>
            <td>{Recovered}</td>
            <td>{Date}</td>
        </tr>
    );
}

export default DetallePaisCasos;