import React from 'react';
//import './Slider.css';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios">
 
            <div className="row">
 
                <div className="col-lg-4 p-5">
                <img className="bd-placeholder-img rounded-circle mx-auto d-block" src={process.env.PUBLIC_URL + 'images/velaserv3.jpg'} width="140" height="140">
                </img>

                <h2>Velas</h2>
                    <p class="text-justify font-italic">La aromaterapia mediante velas aromáticas, tiene muchos beneficios que cambian
                     dependiendo con que esencia son creadas, los colores, tamaños, flores y forman  cambian tu ambiente</p>
                    {/* <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p> */}
                </div>
        
                <div className="col-lg-4 p-5">
                <img className="bd-placeholder-img rounded-circle mx-auto d-block" src={process.env.PUBLIC_URL + 'images/esencia1.jpg'} width="140" height="140">
                 </img>
                <h2>Esencias</h2>
                    <p class="text-justify font-italic">Los aceites esenciales tienen distinto grados de 
                        actividad antimicrobiana y se cree que tienen propiedades antivirales, 
                        nematicidas, antifúngicas, insecticidas y antioxidantes</p>
                   {/* <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p> */}
                </div>
 
                <div className="col-lg-4 p-5">
                <img className="bd-placeholder-img rounded-circle mx-auto d-block" src={process.env.PUBLIC_URL + 'images/taller1.jpg'} width="140" height="140">
                </img>
                    <h2>Talleres</h2>
                    <p class="text-justify font-italic">La formación en distintos temas expande tu capacidad de entender como funciona el mundo y 
                        las energías que lo rodean, llegando a crear tu propio ambiente en completa armonia
                    </p>
                   {/* <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p> */}
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;