import React from 'react';
import Contenedorhome from '../../home/contenedorhome/Contenedorhome';



class Contenedor2 extends React.Component {

	render() {

		return(
			<div class ="container mt-3">
			<div class ="d-flex mb-3">
			<div class ="p-2 flex-fill">
			<img className="bd-placeholder-img rounded" src={process.env.PUBLIC_URL + 'images/reiki.jpg'} width="300" height="300">
                </img>
				</div>
				<div class ="p-2 flex-fill ">
			
					<h1><i class="fas fa-glasses"></i>&nbsp;¿Sabes que es Reiki?</h1>
					<br/>
					<p class="text-justify font-italic p-2"  >Reiki es una técnica de sanación energética japonesa.
                     La forma predominante de reiki que se practica en todo el mundo hoy en día, también
                      conocida como Usui reiki, fue creada por el Dr. Mikao Usui a principios del siglo XX. 
                      Es un enfoque de salud complementario o alternativo. Reiki no cura directamente enfermedades
                       o dolencias. En cambio, se utiliza como una forma de controlar los síntomas y mejorar el
                        bienestar general.
					<br/>
					Durante una sesión de reiki, el practicante coloca sus manos directamente sobre ti o
                     justo encima de ti para lograr la curación. La creencia es que el médico puede estimular 
                     las habilidades curativas naturales de su cuerpo.</p>

					
					
					</div>	
					</div>
					</div>

		)

	}   

}

export default Contenedor2;