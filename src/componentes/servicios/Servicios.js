import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';
 
 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<section className="text-center">
				    <div className="container">
					<hr className="featurette-divider" />
					<hr className="featurette-divider" />
					<i class="fas fa-praying-hands"></i>
				      <h1 className="jumbotron-heading">Productos y Servicios </h1>
					  <hr className="featurette-divider" />
				      <h2 className="lead text-muted">
				     	Estos son nuestros productos y servicios
				      </h2>				      
				    </div>
				</section>
 
		        <div className="album py-5 bg-light">
				    <div className="container">
 
				      <div className="row">
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/chakras.jpg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Vela artesanal:<br></br> Intención 7 Chakras</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Tendemos a pensar que la paz interna es una utopía y algo
							   que consiguen ciertas personas con esa capacidad innata, que es algo fuera de nuestro 
							   alcance dado el estrés y la falta de tiempo en nuestra vida.  Todos disponemos de 
							   esa capacidad y potencial. Es más, en esencia, todos somos armonía, paz y sobre todo amor. 
							   La vela de los siete chakras es una conexión directa
							   con la energía lumínica más pura y con tu corazón. Te invito a darte la oportunidad
							    de descubrir la calidez que habita en ti</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/arcangel.jpg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Vela artesanal: Arcángeles</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Los 7 arcángeles son reconocidos por 
							  ser los más poderosos intercesores entre los seres humanos y Dios. Para invocarlos 
							  las velas siempre crean una conexión con estos seres espirituales para que escuchen
								 tus peticiones.<br></br>
								Arcángel Miguel – Vela azul o roja<br></br>
								Arcángel Jofiel – Vela amarilla<br></br>
								Arcángel Chamuel – Vela rosada<br></br>
								Arcángel Gabriel – Vela blanca<br></br>
								Arcángel Rafael – Vela verde<br></br>
								Arcángel Uriel – Vela naranja o <br></br>
								Arcángel Zadquiel – Vela morada
								</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/kathegel.jpeg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Vela artesanal: Gel</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Las velas de gel manuales pueden ser un 
							  regalo estupendo para cualquier aniversario o cumpleaños. No son difíciles de
							   hacer, pero son lo suficientemente sofisticadas como para dejar boquiabierto 
							   a quien se la regales. <br></br>La parafina para velas de gel es una parafina 
							   con textura gelatinosa con la que se pueden hacer velas de gel transparente con las que podrás
							    ver su fondo. Con esta parafina conseguirás velas muy vistosas y originales. 
								</p><br></br>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/esenciaserv.jpg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Aceites esenciales</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Los aceites esenciales son la esencia de una planta,
							   un regalo de la tierra, destilada y preparada para que puedas llevar el poder de la
							    naturaleza a tu hogar. Dentro de muchas plantas, ocultas en las raíces, semillas, flores,
								corteza, se encuentran compuestos químicos concentrados y muy potentes.Entre los beneficios 
								de los aceites esenciales, en general, podemos destacar sus propiedades analgésicas y 
								antiinflamatorias.Además, se utilizan para eliminar la tos, los resfriados, curar las
								heridas y mejorar la digestión. 
								</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/sales.jpg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Sales exfoliantes</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Mantener una buena salud no solo implica
							   hacer ejercicio y tener una alimentación balanceada, tu piel también necesita 
							   cuidados y qué mejor manera que hacerlo de manera natural con este 
							    con sal marina que te ayudará a tener un aspecto mucho más saludable.Uno de los
								 usos que podemos darle a la sal marina y que seguramente estás desaprovechando, 
								 es como exfoliante natural, tanto para rostro, como para el cuerpo.ingrediente 
								 natural tiene tantos beneficios que, definitivamente tienes que incluirlo en el cuidado de tu piel.
								</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
						<div className="col-md-4">
				          <div className="card mb-4 shadow-sm"><br></br>
						  <img className="bd-placeholder-img rounded-circle mx-auto d-block "  src={process.env.PUBLIC_URL + 'images/taller2.jpg'} width="140" height="140">
							</img><br></br>
							<h4 className="text-center">Talleres</h4>
				            <div className="card-body">
				              <p className="card-text text-justify font-italic">Para nosotros no solo se trata de que adquieras un 
							  producto, también hace parte de nuestra razón de ser guiarte o enseñarte el significado y 
							  las diferentes aplicaciones de nuestros productos; es por eso que contamos con espacios
							   de aprendizaje en los que no sólo podrás aprender cuál es el proceso de elaboración de
							    algunos productos sino también como aprovechar al máximo su uso en el hogar para potenciar 
								y tener en completa armonia tus espacios. <br></br>Talleres de: Velas artesanales, uso de esencias 
								y sesiones de Reiki
								</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>{/* */}
				    </div>
				</div>
 
	  		</main>
			  <hr className="featurette-divider" />
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;