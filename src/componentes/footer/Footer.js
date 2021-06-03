import React from 'react';


class Footer extends React.Component {

    render() {

        return (

          <div  style={{backgroundColor:'#AED6F1'}} >
            <footer className = "container p-3 my-3" >
                 
           
            <div className="row">
                 {/*Redes sociales*/}
                <div className="col-lg-4 p-3">    
                    <h5><i class="fas fa-people-arrows"></i>&nbsp;Redes sociales</h5>
                    <br></br>
                    <h6 className="font-weight-normal"><i class="fab fa-facebook-square"></i>&nbsp; Esencia y Bienestar plus</h6>
                    <br></br>
                    <h6 className="font-weight-normal"><i class="fab fa-instagram-square"></i>&nbsp; @EsenciaB_Plus</h6>
                    <br></br>
                    <h6 className=" font-weight-normal"><i class="fab fa-twitter-square"></i>&nbsp; @EsenciaB_Plus</h6>
                    <br></br>
                    <h6 className="font-weight-normal"><i class="fab fa-whatsapp-square"></i>&nbsp; +57 3165540921</h6>
                    <br></br>
                    <h6 className="font-weight-normal"> <i class="fas fa-angle-double-up"></i>< a className= "text-dark" href = "#"> Subir < /a></h6>
                </div>
                {/*Aliados*/}
                <div className="col-lg-4 p-3 ">    
                    <h5><i class="fas fa-user-friends"></i>&nbsp;Nuestros Aliados</h5>
                    <br></br>
                    <h6 className="font-weight-normal">Vanila</h6>
                    <br></br>
                    <h6 className="font-weight-normal">Belleza Holistica Medellín</h6>
                    <br></br>
                    <h6 className="font-weight-normal">Velas Mística</h6>
                    <br></br>
                    <h6 className="font-weight-normal">Ser Integral</h6>
                    <br></br>
                    <h6 className="font-weight-normal"> <i class="fas fa-angle-double-up"></i>< a className= "text-dark" href = "#"> Subir < /a></h6>
                </div>
                 {/*Fuentes de Información*/}
                <div className="col-lg-4 p-3">    
                    <h5><i class="fas fa-info-circle"></i>&nbsp;Más información </h5>
                    <br></br>

                    <h6 className="font-weight-normal">< a className= "text-dark" href = "https://www.reikicolombia.org/" target="blank" role="button"> Reiki en Colombia < /a></h6>
                    <br></br>
                    <h6 className="font-weight-normal">< a className= "text-dark" href = "https://www.mayoclinic.org/es-es/healthy-lifestyle/consumer-health/expert-answers/aromatherapy/faq-20058566" target="blank" role="button"> Mayo Clinic< /a></h6>
                    <br></br>
                    <h6 className="font-weight-normal">< a className= "text-dark" href = "https://www.economiasostenible.org/concepto-de-emprendimiento-social/" target="blank" role="button">Economía sostenible< /a></h6>
                    <br></br>
                    <h6 className="font-weight-normal">< a className= "text-dark" href = "https://psicologiaymente.com/social/bandura-teoria-aprendizaje-cognitivo-social" target="blank" role="button">Psicología Social< /a></h6>
                    <br></br>
                    <h6 className="font-weight-normal"> <i class="fas fa-angle-double-up"></i>< a className= "text-dark" href = "#"> Subir < /a></h6>
                </div>
            </div>
            
            </footer>
            </div>
        )

    }

}

export default Footer;