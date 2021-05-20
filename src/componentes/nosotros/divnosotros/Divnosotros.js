import React from 'react';



class Divnosotros extends React.Component {

	render() {

		return(
            <div className ="container mt-3">
				<div className ="d-flex mb-3">
				<div className ="p-2 flex-fill">
				<br/>
				<br/>
					<h1>Sabías qué...</h1>
					<br/>
					<p className="text-justify font-italic">La aromaterapia es una técnica terapéutica utilizada en la 
						medicina alternativa. Mediante el aroma conseguiremos relajarnos,
						desconectar o combatir el estrés del día a día. Hay muchas opciones
						para conseguirlo como los aceites esenciales o barritas, pero las 
						velas aromáticas son una opción económica y fantástica para llevarlo a cabo. 
					<br/>

					¿Cómo funciona la aromaterapia? Nuestro cerebro cuando percibimos 
					un aroma comienza a liberar hormonas y neuroquímicos, que alteran 
					nuestra fisiología modificando la manera en la que nos sentimos y 
					nuestro comportamiento. En otras palabras, los diferentes aromas 
					transmiten sensaciones diferentes dependiendo de cada persona, 
					pero hay notas en cada uno de ellos que suelen ser comunes.</p>
					
					
					</div>	
				<div className ="p-2 flex-fill "></div>	
				<img className="bd-placeholder-img rounded" src={process.env.PUBLIC_URL + 'images/velaserv1.jpg'} width="600" height="600">
                </img>
				</div>
			</div>

		)

	}   

}

export default Divnosotros;