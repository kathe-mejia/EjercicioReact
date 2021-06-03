import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; 
import Detalles from './detalles/Detalles'; 
import Footer from '../footer/Footer';
import Contenedornosotros from './contenedornosotros/Contenedornosotros';
import Contenedor2 from './contenedornosotros/Contenedor2';

import Divnosotros from './divnosotros/Divnosotros';
 
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
				
				<Jumbotron />
			
				
				<Detalles /> 
				<Contenedornosotros/>
				<hr className="featurette-divider" />
				<Contenedor2/>
				
 
	  		</main>
			  
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros