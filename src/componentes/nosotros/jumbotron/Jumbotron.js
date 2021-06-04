import React from 'react';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 
        <div className="jumbotron " style={{background: 'linear-gradient(#2AE947, #F09FE5)'}}>
            <div className="container">
                <h1 className="display-3 font-weight-bold"><i class="fas fa-users"></i> Nosotros </h1>
                <p class="font-italic">
                <br/>
                    Somos una marca 100% dedicada al cuidado personal de cuerpo y mente...
                    <br/>
                    Nuestra especialidad es la busqueda del equilibrio a través de aromas 
                    esencias y velas para nuestros espacios. 
                    <br/>
                    Producimos de manera artesanal velas y esencias
                    además puedes formarte en nuestros talleres para tener en constante armonia
                    los espacios de tu hogar para el equilibro de cuerpo y mente
                </p>
                <br/>
                <p><a className="btn btn-primary btn-lg" href="https://esenciadelbienestar.com/blog"target="_blank" role="button">Visitar Web</a></p>
            </div>
        </div>
 
    )
    
  }
 
}
 
export default Jumbotron;