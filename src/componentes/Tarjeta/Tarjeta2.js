import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
import Tarjeta from '../Tarjeta/Tarjeta';

 
class Tarjeta2 extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
            <Tarjeta/>
		        
				

		

	  		</main>
			  <hr className="featurette-divider " />
	  		<Footer/>
			

	  		</>

		)

	}

}

export default Tarjeta2;