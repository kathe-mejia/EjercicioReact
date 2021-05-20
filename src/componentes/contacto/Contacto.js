import React from 'react';
 
import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario'; 
import Mapa from './mapa/Mapa'; 
import Footer from '../footer/Footer';
 
 
class Contacto extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
			
				<div className="container">
				<hr className="featurette-divider" />	
				<br></br>
					<h1 className="mb-5">Contáctanos</h1>
					<h3 className="font-italic">Eres muy importante para nosotros...<br></br>
					Nuestra comunidad 
						puede seguir creciendo
					</h3>
					<br></br>
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Formulario /> <span> </span>
 
						</div>
 
						<div className="col-md-6">
		        
							<Mapa /> <span> </span>
 
						</div>
 
					</div>
				</div>	
 
	  		</main>
			  <hr className="featurette-divider" />
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Contacto;