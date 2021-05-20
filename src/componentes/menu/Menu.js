import React from 'react';
import {NavLink} from "react-router-dom";
//import './Menu.css';

class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top "style={{backgroundColor: '#AED6F1'}}>
			  <i class="fas fa-spa"></i>
		    <NavLink to="/" className="navbar-brand text-dark"> &nbsp;Esencia y Bienestar Plus!</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav ml-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link text-dark">Inicio </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link text-dark">Nosotros</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link text-dark">Servicios</NavLink>
			        </li>
					<li className="nav-item">
			          	<NavLink to="/Tarjeta" className="nav-link text-dark">Combitos</NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link text-dark">Contacto </NavLink>
			        </li>

			    </ul>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;