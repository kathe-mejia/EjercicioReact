import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; // Este Componente lo crearé a continuación 
import Detalles from './detalles/Detalles'; // Este Componente lo crearé a continuación 
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
			  <hr className="featurette-divider" />
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros