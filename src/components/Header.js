import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary" >
              <h3>
                <Link to={'/'} className="text-light">Prueba Conocimientos Técnicos Perfil Desarrollador Full-Stack </Link> 
              </h3>

{/*               <Link to={"/paises/detallepais/"}  className="btn btn-danger nuevo-post d-block d-md-inline-block">Ver Detalle</Link> */}
        </nav>
    );
};

export default Header;