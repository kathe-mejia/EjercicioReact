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
         
        <h1>Precios nuestros productos y servicios</h1>
        <br></br>
        <br></br>
        {data.map(producto => (
          <Tarjeta adicional={producto.adicional}
            precio={producto.precio} key={producto.nombre} nombre={producto.nombre} descripcion={producto.descripcion} showAdditional={showAdditional}
            lugar={producto.lugar} duracion={producto.duracion} notas={producto.notas}/>
        ))}
      </div>
    )
  }
  
  export default HomeTarjeta;