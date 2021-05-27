import React from 'react';
 
class Detalles extends React.Component {
 
  render() {
 
    return (
 
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-5">
                    <h2>Objetivo</h2>
                    
                    <p class="font-italic">Crear e impulsar la paz y tranquilidad en los ambientes con el equilibrio, entre cuerpo y mente </p>
                   {/*  <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>*/}
                   <br/>                  
                   <img className="bd-placeholder-img rounded-circle" class="img-thumbnail mx-auto d-block" src={process.env.PUBLIC_URL + 'images/objetivo.jpg'} width="250" height="250">
                </img>
                </div>
                <div className="col-md-4 p-5">
                    <h2>Misión</h2>
                    <p class="font-italic">Inspirar en las personas la cultura de construir espacios que mantengan nuestro ambiente en
                        en completa armonia </p>
                    {/*  <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>*/}
                    <img className="bd-placeholder-img rounded-circle" class="img-thumbnail mx-auto d-block" src={process.env.PUBLIC_URL + 'images/mision.jpg'} width="450" height="450">
                </img>
                </div>
                <div className="col-md-4 p-5">
                    <h2>Visión</h2>
              
                    <p class="font-italic">Para el 2023 ser reconocidos como agentes de cambio en la mente para la vida en
                        armonia de las personas
                    </p>      <br></br>
                     {/*  <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>*/}
                     <img className="bd-placeholder-img rounded-circle" class="img-thumbnail mx-auto d-block" src={process.env.PUBLIC_URL + 'images/vision.jpg'} width="250" height="250">
                </img>
                </div>
            </div>
 
            <hr/>
 
        </div>
 
    )
    
  }
 
}

export default Detalles;