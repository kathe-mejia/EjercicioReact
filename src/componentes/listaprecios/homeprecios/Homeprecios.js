import React from 'react';
import data from '../data';
import Tarjetadeprecios from '../tarjetadeprecios/Tarjetadeprecios';

function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };
  
  
  function Homeprecios() {
    return (
      <div className="wrapper">
        <h1>Precios nuestros productos y servicios</h1>
        {data.map(producto => (
          <Tarjetadeprecios additional={producto.additional}
            note1={producto.note1} key={producto.name} name={producto.name} description={producto.description} showAdditional={showAdditional}
            price={producto.price}/>
        ))}
      </div>
    )
  }
  
  export default Homeprecios;