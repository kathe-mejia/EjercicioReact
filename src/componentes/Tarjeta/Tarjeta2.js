import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
import Tarjeta from './Tarjeta';
import HomeTarjeta from './HomeTarjeta'; 


 
class Tarjeta2 extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
			<br></br>
            <HomeTarjeta/>
		        
				

		

	  		</main>
	
	  		<Footer/>
			

	  		</>

		)

	}

}

export default Tarjeta2;