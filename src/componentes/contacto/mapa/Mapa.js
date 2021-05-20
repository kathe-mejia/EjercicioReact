import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
          <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.69937746835!2d-75.65125278940762!3d6.244369472502513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1621466992853!5m2!1ses!2sco" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
       
    )  
    
  }
 
}
 
export default Mapa;