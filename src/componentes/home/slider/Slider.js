import React from 'react';
//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
 
  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel" >
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner" >
		        <div className="carousel-item active">
					{/*Cambiar imagenes, convertir la fuente en un objeto jsx*/}
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/velaslider2.jpg'} width="1150" height="80" />
		            <div className="elementos">
					<hr className="featurette-divider" />
		               
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/velaslider3.jpg'} width="1150" height="80" />
		            <div className="elementos">
					<hr className="featurette-divider" />
		                
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/velaslider4.jpg'} width="1150" height="80"  />
		            <div className="elementos">
					<hr className="featurette-divider" />
		              
		            </div>
		        </div>
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
	
	
	)
    
  }
 
}
 
export default Slider;