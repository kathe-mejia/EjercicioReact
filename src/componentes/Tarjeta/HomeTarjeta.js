import React from 'react';
import data from './data';
import Tarjeta from './Tarjeta';

function showAdditional(adicional) {
    const alertInformation = Object.entries(adicional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };
  
  
  function HomeTarjeta() {
    return (
      <div className="wrapper">
  
        <h1><i class="fab fa-envira"></i>Te presentamos nuestro principales servicios <i class="fab fa-envira"></i> </h1>
 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {data.map(producto => (
          <Tarjeta 
            precio={producto.precio} key={producto.nombre} nombre={producto.nombre} descripcion={producto.descripcion} 
            lugar={producto.lugar} duracion={producto.duracion} notas={producto.notas}/>
        ))}
      </div>
    )
  }
  
  export default HomeTarjeta;