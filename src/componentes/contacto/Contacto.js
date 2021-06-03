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
					<h1 className="mb-5"> <i class="fas fa-id-badge"></i>&nbsp;Contáctanos</h1>
					<h4 className="font-italic">Eres muy importante para nosotros...<br></br>
					Nuestra comunidad 
						puede seguir creciendo
					</h4>
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
			
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Contacto;