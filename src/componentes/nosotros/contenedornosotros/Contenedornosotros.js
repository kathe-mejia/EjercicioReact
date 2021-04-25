import React from 'react';
import Contenedorhome from '../../home/contenedorhome/Contenedorhome';



class Contenedornosotros extends React.Component {

	render() {

		return(
			<div class ="container mt-3">
			<div class ="d-flex mb-3">
			<div class ="p-2 flex-fill">
			<img className="bd-placeholder-img rounded" src={process.env.PUBLIC_URL + 'images/esencia2.jpg'} width="300" height="300">
                </img>
				</div>
				<div class ="p-2 flex-fill">
			
					<h1>Sabías qué...</h1>
					<br/>
					<p class="text-justify font-italic">Las esencias o aceites esenciales son
					 una mezcla compleja de sustancias aromáticas responsable de las fragancias 
					 de las flores. Poseen numerosas acciones farmacológicas, por lo que constituyen 
					 la base de la aromaterapia, pero además son ampliamente utilizados en perfumería
					  y cosmética, en la industria farmacéutica y en la industria de la alimentación, 
					  licorería y confitería.

					<br/>
					Los aceites volátiles, aceites esenciales o simplemente esencias, son las
					sustancias aromáticas naturales responsables de las fragancias de las flores
					y otros órganos vegetales. Actualmente, sólo se emplea esta definición si se 
					obtienen mediante arrastre en corriente de vapor de agua o por expresión del 
					pericarpio en el caso de los cítricos.</p>
					
					
					</div>	
					</div>
					</div>

		)

	}   

}

export default Contenedornosotros;